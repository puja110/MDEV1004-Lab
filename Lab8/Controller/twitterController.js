// twitterController.js
const TwitterModel = require("../Model/twitterModel");

class TwitterController {
  constructor() {
    this.twitterModel = new TwitterModel();
  }

  async createTweet(text) {
    try {
      // await this.twitterModel.tweet(text);
      // return "Tweet created successfully";
      await this.twitterModel.tweet(text);
        return `
          <div>
            <h1>Lab-8</h1>
            <br/>
            <p>Puja Shrestha - 200573293</p>
            <br/>
            <h3>Tweet message</h3>
            <br/>
            <p>${text}</p>
          </div>
        `;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TwitterController;
