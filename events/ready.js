// const config = require("../config.json");
const Discord = require("discord.js");
const schedule = require("node-schedule-tz");

module.exports = (client) => {
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
    //   // rule.tz = "MYT";
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
      // rule.tz = "MYT";
      var sentTime = schedule.scheduleJob(rule, function () {
        channel.send(countdownEmbed);
      });
      channel.send(countdownEmbed);
    }
  });
};
