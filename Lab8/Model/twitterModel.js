// twitterModel.js
const { TwitterApi } = require("twitter-api-v2");

class TwitterModel {
  constructor() {
    this.client = new TwitterApi({
      appKey: "tkhavByUSPK6s5IbT3ik2lqI6",
      appSecret: "l4GQ3qsbFQof0FI668lywN5YsZuGLMaZLvRJ8Re5FlN0NGnB7p",
      accessToken: "1771014325320200192-K15ItC5oJ4PkEWeOtruMgmoRgOgHiT",
      accessSecret: "wIJSxYn1fkw5cxIdrm2RkvMiWnqkKBmRoaV4GoOBhxK7v",
      bearerToken: "AAAAAAAAAAAAAAAAAAAAANq%2FswEAAAAAZ5mS7x7StdkYMT0gPxIGcQ57qlY%3D7Tx02Qh0tr1ki5i93A5DfTCk4ayv5gB4IWi8llej4EFm6I5EgQ",
    });

    this.rwClient = this.client.readWrite;
  }

  async tweet(text) {
    try {
      await this.rwClient.v2.tweet(
        text
      );
      console.log("Tweet created successfully");
    } catch (error) {
      console.error("Error creating tweet:", error);
      throw error;
    }
  }
}

module.exports = TwitterModel;
