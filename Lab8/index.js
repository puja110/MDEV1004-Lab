// app.js
const express = require("express");
const TwitterController = require("./Controller/twitterController");

const app = express();
const PORT = 3000;

const twitterController = new TwitterController();

// // List of random words
// const tweetWords = ["amazing", "awesome", "fantastic", "Great", "Nice", "Good", "Incredible", "wonderful", "fabulous"];

// // Function to generate a random word
// function getRandomWord() {
//   return tweetWords[Math.floor(Math.random() * tweetWords.length)];
// }

// // Function to replace placeholders with random words
// function generateUniqueTweet() {
//   const adjective = getRandomWord();

//   // Replace placeholders with random words
//   const tweet = tweetTemplate.replace("{adjective}", adjective).replace("{feeling}", feeling);

//   // Output the tweet
//   console.log(tweet);
// }

// generateRandomTweet()

// Handle the route for creating a tweet
app.get("/tweet", async (req, res) => {
  const tweetWordArray = ["amazing", "awesome", "fantastic", "Great", "Nice", "Good", "Incredible", "wonderful", "fabulous"];

  try {
    // Getting random tweet word from the tweet array
    const tweetWord = tweetWordArray[Math.floor(Math.random() * tweetWordArray.length)]

    // Getting current date and time to generate unique time format
    const date = new Date().getTime();

    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();

    const eventTime = `Current time: ${hours}:${minutes}:${seconds}`

    // Tweet template with placeholders
    const tweetMessage = `It was ${eventTime} event! The next event will be held at!`;
    console.log("tweetMessage: ", eventTime)
    res.send(tweetMessage);
  } catch (error) {
    res.status(500).send("Error creating tweet");
  }
});

// Start your server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
