import React from "react";
import TwitterLogin from "./TwitterLogin";

function App() {
  return (
    <div style={{ padding: "20px", fontFamily: "Arial" }}>
      <h2>Twitter Auto Reply Extension</h2>
      <TwitterLogin />
      <p>
        Once you log in, our system will analyze your public tweets to personalize AI-generated reply suggestions.
      </p>
      <p>
        You can also adjust the number of reply options in settings.
      </p>
    </div>
  );
}

export default App;
