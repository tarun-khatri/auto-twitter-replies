const { Rettiwt } = require('rettiwt-api');

// Get arguments passed from Python `subprocess`
const args = process.argv.slice(2);
if (args.length < 2) {
    console.error("Usage: node rettiwt_tweet_details.js <API_KEY> <TWEET_ID>");
    process.exit(1);
}

const apiKey = args[0];
const tweetId = args[1];

function log(level, message, obj = null) {
    const timestamp = new Date().toISOString();
    let out = `[rettiwt_tweet][${timestamp}][${level}] ${message}`;
    if (obj) out += ` | Data: ${JSON.stringify(obj)}`;
    console.error(out);
}

const rettiwt = new Rettiwt({ apiKey });

async function fetchTweet() {
    try {
        log("INFO", `Fetching exact details for tweetId: ${tweetId}`);
        const tweet = await rettiwt.tweet.details(tweetId);

        if (!tweet) {
            throw new Error(`Tweet ${tweetId} not found or inaccessible.`);
        }

        // Extract full text
        const text = tweet.fullText || "";

        // Log raw media data for debugging
        if (tweet.media) {
            log("DEBUG", `Raw media array length: ${tweet.media.length}`);
            for (let i = 0; i < tweet.media.length; i++) {
                const m = tweet.media[i];
                log("DEBUG", `Media[${i}]: type=${m.type}, url=${m.url}, keys=${Object.keys(m).join(',')}`);
            }
        } else {
            log("DEBUG", `No media property on tweet. Available keys: ${Object.keys(tweet).join(',')}`);
        }

        // Extract image URLs
        const imageUrls = [];
        if (tweet.media && Array.isArray(tweet.media)) {
            for (const m of tweet.media) {
                if (m.type && m.type.toLowerCase() === 'photo' && m.url) {
                    imageUrls.push(m.url);
                }
            }
        }

        log("INFO", `Successfully extracted full text and ${imageUrls.length} image(s).`);

        const payload = {
            text: text,
            image_urls: imageUrls,
            author: tweet.tweetBy ? tweet.tweetBy.userName : null
        };

        // stdout must be purely JSON
        console.log(JSON.stringify(payload));
        process.exit(0);

    } catch (error) {
        log("ERROR", "Fatal error occurred fetching tweet.");
        log("ERROR", error.message || error);
        process.exit(1);
    }
}

fetchTweet();
