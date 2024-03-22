// twitterModel.js
const { TwitterApi } = require("twitter-api-v2");

class TwitterModel {
  constructor() {
    this.client = new TwitterApi({
      appKey: "2MSF1qDeenS0tPwPjfV1TBKev",
      appSecret: "605dHRb7fVZMZEjUUHxuagSdZpzgEY30uESI8FJbimrHpvyVMy",
      accessToken: "1770583256720949248-KRO4XflvTSE838K9Rw5mEAMmiwMaiS",
      accessSecret: "3T1zDF1eBMEuraoYoBBYiQoVPPhdo4I0O2rndXz68jfbq",
      bearerToken: "AAAAAAAAAAAAAAAAAAAAAFquswEAAAAAEBhjsHqsnjk1LAnL1mXcrzjWLs8%3DUIuNKcvxWtKa4roCSaEa9BxkpZQgCxen3gR5M4UshTeySGbRu1",
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
