const Discord = require("discord.js");
const fetch = require("snekfetch");
const emoji = [`:smile:`];

module.exports.run = async (bot, msg, args) => {
  fetch.get("https://api.apithis.net/yomama.php").then(joke => {
    const yomama = new Discord.RichEmbed()
    .setTitle("Here's a `Yo Mama` joke!")
    .addField(`${emoji[~~Math.random() * emoji.length]}`, joke.body);
    msg.channel.send({embed: yomama}).catch(e => logger.error(e));
  })
  .catch(e => logger.error(e));
};
module.exports.help = {
  name: "yomama"
}
