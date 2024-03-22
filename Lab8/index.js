// app.js
const express = require("express");
const TwitterController = require("./Controller/twitterController");

const app = express();
const PORT = 3000;

const twitterController = new TwitterController();

// Handle the route for creating a tweet
app.get("/tweet", async (req, res) => {
  // Array of words to use in the tweet
  const tweetWordArray = [
    "amazing", "awesome", "Excellent", "fantastic", "Great", "Nice", "Good", "Terrific", 
    "Incredible", "Outstanding", "wonderful", "Delightful", "fabulous", "Superb", "Splendid"];
  
  // Select a random word from the tweetWordArray
  const tweetWord = tweetWordArray[Math.floor(Math.random() * tweetWordArray.length)]

  // Get the current time in milliseconds
  const time = new Date().getTime()

  // Creating the tweet message with random tweet word and unique string time
  const tweetMessage = `It was ${tweetWord} event! The next event will be held at ${time} (time in string)!`;
  try {
    const tweetResult = await twitterController.createTweet(tweetMessage);
    res.send(tweetResult);
  } catch (error) {
    res.status(500).send("Error creating tweet");
  }
});

// Start your server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
