const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const schedule = require("node-schedule-tz");

// const config = require("./config.json");

client.on("message", async (message) => {
  //   if (message.author == client.users.cache.get("857579443966967808")) {
  sorryResponse = [
    "don't be sorry, be better",
    "takpe, jangan buat lagi",
    "haa yelaa",
  ];
  harithResponse = ["baikk abe!", "uii kemah la abe!", "mantap ganu kiter boh"];
  arepResponse = [
    "aaa noted",
    "noted, thanks!",
    "oki baikk",
    "baik abang arep",
  ];
  samResponse = ["hai, nama saya sam jugak!", "hihi mantap"];
  thanksResponse = ["sama2", "bereh boh", "okayy baik", "orait, takdehal"];
  askResponse = [
    "soalan tu saya serahkan kepada yg lebih pakar",
    "sabar jap eh, nanti ada orang jawab",
  ];
  //   }
  //   if (message.author.id == "464470476391972874") {
  //     responses = choose(sorryResponse);
  //     console.log(responses);
  //     // message.channel.send(responses);
  //   } else
  // if (message.author.id == "318455938312830976") {
  //   responses = choose(harithResponse);
  //   console.log(responses);
  //   message.channel.send(responses);
  // } else if (message.author.id == "442327114289774593") {
  //   responses = choose(arepResponse);
  //   console.log(responses);
  //   message.channel.send(responses);
  // } else if (message.author.id == "631020384875184128") {
  //   responses = choose(samResponse);
  //   console.log(responses);
  //   message.channel.send(responses);
  // }
  // // else if (message.content.includes("sori".toLowerCase())) {
  // //   responses = choose(sorryResponse);
  // //   console.log(responses);
  // //   message.channel.send(responses);
  // // }
  // else
  if (message.content.toLowerCase().includes("sorry".toLowerCase())) {
    responses = choose(sorryResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (message.content.toLowerCase().includes("maseh".toLowerCase())) {
    responses = choose(thanksResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (message.content.toLowerCase().includes("thanks".toLowerCase())) {
    responses = choose(thanksResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (message.content.toLowerCase().includes("maceh".toLowerCase())) {
    responses = choose(thanksResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (
    message.content.toLowerCase().includes("terima kasih".toLowerCase())
  ) {
    responses = choose(thanksResponse);
    console.log(responses);
    message.channel.send(responses);
  } else if (message.content.includes("?")) {
    responses = choose(askResponse);
    console.log(responses);
    message.channel.send(responses);
  }
});

function choose(choices) {
  var index = Math.floor(Math.random() * choices.length);
  return choices[index];
}

// fetch("https://zenquotes.io/api/random")
//   .then((res) => res.json())
//   .then((data) => {
//     // data = res[0].q + res[0].a;
//     // data = JSON.parse(this.response);
//     console.log(data);
//   })
//   .catch((err) => console.log(err));
// const url = "https://zenquotes.io/api/random";
// async function get(url) {
//   // Storing response
//   const response = await fetch(url);

//   // Storing data in form of JSON
//   var data = await response.json();
//   // console.log(data);
//   var output = data[0].q + " -" + data[0].a + "-";
//   console.log(output);
//   return output;
// }

require("./files/event")(client);

// client.login(config.token);
client.login(process.env.token);
