const { Rettiwt } = require('rettiwt-api');

// Get arguments passed from Python `subprocess`
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error("Usage: node rettiwt_scraper.js <API_KEY> <USERNAME>");
    process.exit(1);
}

const apiKey = args[0];
const username = args[1];

// Helper for deep logging
function log(level, message, obj = null) {
    // Only print if LOG_LEVEL allows (optional structure)
    // Write everything to STDERR so STDOUT only contains the final JSON payload.
    const timestamp = new Date().toISOString();
    let out = `[rettiwt_scraper][${timestamp}][${level}] ${message}`;
    if (obj) {
        out += ` | Data: ${JSON.stringify(obj)}`;
    }
    console.error(out);
}

log("INFO", `Starting scraper for username: ${username}`);

// Use the API key
const rettiwt = new Rettiwt({ apiKey });

async function scrapeUser() {
    try {
        log("INFO", `Fetching profile details for: ${username}`);

        // 1. Fetch User Details to get the ID
        const userDetails = await rettiwt.user.details(username);

        if (!userDetails || !userDetails.id) {
            throw new Error("User details failed or user ID not found.");
        }

        const targetUserId = userDetails.id;
        log("INFO", `Found userId: ${targetUserId} for username: ${username}`);

        // 2a. Fetch Main Tweets (Timeline: gets standard tweets and retweets usually)
        let fetchedText = [];
        let cursor = undefined;
        let pages = 0;
        const maxPages = 3; // 3 pages of main timeline (~60 tweets)

        log("INFO", `Starting main timeline fetch loop. Target up to ${maxPages} pages.`);

        while (pages < maxPages) {
            log("INFO", `Fetching main timeline page ${pages + 1}...`);
            const data = await rettiwt.user.timeline(targetUserId, 20, cursor);

            if (!data || !data.list || data.list.length === 0) {
                log("INFO", `No more timeline tweets found on page ${pages + 1}. Breaking loop.`);
                break;
            }

            for (const tweet of data.list) {
                if (tweet.fullText) fetchedText.push(tweet.fullText);
            }

            log("INFO", `Timeline Page ${pages + 1} complete. Found ${data.list.length} tweets.`);

            if (data.next && data.next.value) {
                cursor = data.next.value;
            } else {
                log("INFO", "No next cursor object returned for timeline. Breaking loop.");
                break;
            }
            pages++;
        }

        // 2b. Fetch User Replies (using search filter)
        cursor = undefined;
        pages = 0;
        const maxReplyPages = 3; // 3 pages of replies (~60 replies)

        log("INFO", `Starting replies fetch loop. Target up to ${maxReplyPages} pages.`);

        while (pages < maxReplyPages) {
            log("INFO", `Fetching replies page ${pages + 1}...`);
            const data = await rettiwt.tweet.search({ fromUsers: [username], onlyReplies: true }, 20, cursor);

            if (!data || !data.list || data.list.length === 0) {
                log("INFO", `No more replies found on page ${pages + 1}. Breaking loop.`);
                break;
            }

            for (const tweet of data.list) {
                if (tweet.fullText) fetchedText.push(tweet.fullText);
            }

            log("INFO", `Replies Page ${pages + 1} complete. Found ${data.list.length} tweets.`);

            if (data.next && data.next.value) {
                cursor = data.next.value;
            } else {
                log("INFO", "No next cursor object returned for replies. Breaking loop.");
                break;
            }
            pages++;
        }

        log("INFO", `Scraping complete. Total valid tweets & replies extracted: ${fetchedText.length}`);

        // The Python scraper expects a pure JSON array on STDOUT
        console.log(JSON.stringify(fetchedText));
        process.exit(0);

    } catch (error) {
        // Detailed error dumping to stderr
        log("ERROR", "Fatal error occurred during execution.");
        if (error.response && error.response.data) {
            log("ERROR", "API Error Response:", error.response.data);
        } else {
            log("ERROR", error.message || error);
        }
        process.exit(1);
    }
}

scrapeUser();
