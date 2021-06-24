const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");

const config = require("./config.json");

client.on("ready", async () => {
  client.guilds.cache.forEach((guild) => {
    if (guild == config.guild) {
      console.log("The client is ready");
    }
    console.log(guild);
  });
});

client.on("message", async (message) => {
  //   if (message.author == client.users.cache.get("857579443966967808")) {
  sorryResponse = ["don't be sorry, be better", "takpe, jangan buat lagi"];
  harithResponse = ["baikk abe!", "uii kemah la abe!", "mantap ganu kiter boh"];
  arepResponse = ["aaa noted", "noted, thanks!", "oki baikk"];
  samResponse = ["hai, nama saya sam jugak!", "hihi mantap"];
  //   }
  //   if (message.author.id == "464470476391972874") {
  //     responses = choose(sorryResponse);
  //     console.log(responses);
  //     // message.channel.send(responses);
  //   } else
  if (message.author.id == "318455938312830976") {
    responses = choose(harithResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (message.author.id == "442327114289774593") {
    responses = choose(arepResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (message.author.id == "631020384875184128") {
    responses = choose(samResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (message.content.includes("sori")) {
    responses = choose(sorryResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (message.content.includes("sorry")) {
    responses = choose(sorryResponse);
    console.log(responses);
    message.channel.send(responses);
  }
});

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

client.login(config.token);
// client.login(process.env.token);
