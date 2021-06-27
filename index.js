const Discord = require("discord.js");
const client = new Discord.Client();
const fetch = require("node-fetch");
const schedule = require("node-schedule-tz");

// const config = require("./config.json");

client.on("ready", async () => {
  client.guilds.cache.forEach((guild) => {
    // if (guild == config.guild2) {
    //   console.log("The client is ready");
    //   console.log(guild);
    //   client.user.setActivity("Awak", { type: "WATCHING" });

    //   channel = guild.channels.cache.get("791078758572490763");
    //   console.log(channel);

    //   var date = new Date();

    //   var currentDate = date;
    //   console.log("Current date:" + currentDate);
    //   console.log(currentDate);

    //   // list of end dates
    //   var newUpdate = new Date("7/28/2021");
    //   var vagabond = new Date("7/8/2021");
    //   var spiralAbyss = new Date("7/1/2021");
    //   var kleeBanner = new Date("6/29/2021");
    //   var epitomeBanner = new Date("6/29/2021");
    //   var echoingTales = new Date("7/21/2021");
    //   console.log("Update date:" + newUpdate);
    //   console.log(newUpdate);

    //   // var diffTime = Math.abs(newUpdate - currentDate);
    //   var newUpdate_dayLeft =
    //     Math.ceil(Math.abs(newUpdate - currentDate) / (1000 * 60 * 60 * 24)) +
    //     " days";
    //   var vagabond_dayLeft =
    //     Math.ceil(Math.abs(vagabond - currentDate) / (1000 * 60 * 60 * 24)) +
    //     " days";
    //   var spiralAbyss_dayLeft =
    //     Math.ceil(Math.abs(spiralAbyss - currentDate) / (1000 * 60 * 60 * 24)) +
    //     " days";
    //   var kleeBanner_dayLeft =
    //     Math.ceil(Math.abs(kleeBanner - currentDate) / (1000 * 60 * 60 * 24)) +
    //     " days";
    //   var epitomeBanner_dayLeft =
    //     Math.ceil(
    //       Math.abs(epitomeBanner - currentDate) / (1000 * 60 * 60 * 24)
    //     ) + " days";
    //   var echoingTales_dayLeft =
    //     Math.ceil(
    //       Math.abs(echoingTales - currentDate) / (1000 * 60 * 60 * 24)
    //     ) + " days";

    //   // console.log(diffTime + " miliseconds");
    //   console.log(newUpdate_dayLeft);
    //   console.log(vagabond_dayLeft);
    //   console.log(spiralAbyss_dayLeft);
    //   console.log(kleeBanner_dayLeft);
    //   console.log(epitomeBanner_dayLeft);
    //   console.log(echoingTales_dayLeft);

    //   // embed message
    //   const countdownEmbed = new Discord.MessageEmbed()
    //     .setColor("RANDOM")
    //     .setTitle("Countdown Days:")
    //     .setThumbnail(
    //       "https://i.pinimg.com/originals/2b/b9/c6/2bb9c64d1acff9ceb3405dbeeda49d70.jpg"
    //     )
    //     .addField("Update 1.7", newUpdate_dayLeft)
    //     .addField("Vagabond Sword Event", vagabond_dayLeft)
    //     .addField("Current Spiral Abyss Phase", spiralAbyss_dayLeft)
    //     .addField("Klee Banner", kleeBanner_dayLeft)
    //     .addField("Epitome Banner", epitomeBanner_dayLeft)
    //     .addField("Echoing Tales", echoingTales_dayLeft);

    //   var rule = new schedule.RecurrenceRule();
    //   rule.hour = 00;
    //   rule.minute = 00;
    //   rule.tz = "MYT";
    //   var sentTime = schedule.scheduleJob(rule, function () {
    //     channel.send(countdownEmbed);
    //   });
    //   channel.send(countdownEmbed);
    // }
    if (guild == process.env.guilds) {
      console.log("The client is ready");
      console.log(guild);

      client.user.setActivity("Awak", { type: "WATCHING" });

      channel = guild.channels.cache.get("791078758572490763");
      console.log(channel);

      var date = new Date();

      var currentDate = date;
      console.log("Current date:" + currentDate);
      console.log(currentDate);

      // list of end dates
      var newUpdate = new Date("7/28/2021");
      var vagabond = new Date("7/8/2021");
      var spiralAbyss = new Date("7/1/2021");
      var kleeBanner = new Date("6/29/2021");
      var epitomeBanner = new Date("6/29/2021");
      var echoingTales = new Date("7/21/2021");
      console.log("Update date:" + newUpdate);
      console.log(newUpdate);

      // var diffTime = Math.abs(newUpdate - currentDate);
      var newUpdate_dayLeft =
        Math.ceil(Math.abs(newUpdate - currentDate) / (1000 * 60 * 60 * 24)) +
        " days";
      var vagabond_dayLeft =
        Math.ceil(Math.abs(vagabond - currentDate) / (1000 * 60 * 60 * 24)) +
        " days";
      var spiralAbyss_dayLeft =
        Math.ceil(Math.abs(spiralAbyss - currentDate) / (1000 * 60 * 60 * 24)) +
        " days";
      var kleeBanner_dayLeft =
        Math.ceil(Math.abs(kleeBanner - currentDate) / (1000 * 60 * 60 * 24)) +
        " days";
      var epitomeBanner_dayLeft =
        Math.ceil(
          Math.abs(epitomeBanner - currentDate) / (1000 * 60 * 60 * 24)
        ) + " days";
      var echoingTales_dayLeft =
        Math.ceil(
          Math.abs(echoingTales - currentDate) / (1000 * 60 * 60 * 24)
        ) + " days";

      // console.log(diffTime + " miliseconds");
      console.log(newUpdate_dayLeft);
      console.log(vagabond_dayLeft);
      console.log(spiralAbyss_dayLeft);
      console.log(kleeBanner_dayLeft);
      console.log(epitomeBanner_dayLeft);
      console.log(echoingTales_dayLeft);

      // embed message
      const countdownEmbed = new Discord.MessageEmbed()
        .setColor("RANDOM")
        .setTitle("Countdown Days:")
        .setThumbnail(
          "https://i.pinimg.com/originals/2b/b9/c6/2bb9c64d1acff9ceb3405dbeeda49d70.jpg"
        )
        .addField("Update 1.7", newUpdate_dayLeft)
        .addField("Vagabond Sword Event", vagabond_dayLeft)
        .addField("Current Spiral Abyss Phase", spiralAbyss_dayLeft)
        .addField("Klee Banner", kleeBanner_dayLeft)
        .addField("Epitome Banner", epitomeBanner_dayLeft)
        .addField("Echoing Tales", echoingTales_dayLeft);

      var rule = new schedule.RecurrenceRule();
      rule.hour = 00;
      rule.minute = 00;
      rule.tz = "MYT";
      var sentTime = schedule.scheduleJob(rule, function () {
        channel.send(countdownEmbed);
      });
      channel.send(countdownEmbed);
    }
  });
});

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

// client.login(config.token);
client.login(process.env.token);
