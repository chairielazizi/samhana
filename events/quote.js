const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");

module.exports = (client) => {
  // start to fetch the api from zenquote
  const url = "https://zenquotes.io/api/random";
  async function get(url) {
    // Storing response
    const response = await fetch(url);

    // Storing data in form of JSON
    var data = await response.json();
    // console.log(data);
    var output = data[0].q + " -" + data[0].a + "-";
    console.log(output);
    return output;
  }
  setInterval(async () => {
    var channel = client.channels.cache.get("806020201682042921");
    quote = await get(url);
    channel.send(quote);
  }, "28800000");
};
