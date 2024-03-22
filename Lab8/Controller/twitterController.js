// twitterController.js
const TwitterModel = require("../Model/twitterModel");

class TwitterController {
  constructor() {
    this.twitterModel = new TwitterModel();
  }

  async createTweet(text) {
    try {
      await this.twitterModel.tweet(text);
        return `
          <div>
            <h1>Lab-8</h1>
            <h2>Puja Shrestha - 200573293</h2>
            <h3>Tweet: </h3>
            <p>"${text}"</p>
          </div>
        `;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = TwitterController;
