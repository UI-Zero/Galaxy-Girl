const Discord = require("discord.js")
const apikey = require("../keys.json")
const Client = require("fortnite")
const fortnite = new Client("566885ad-51cc-4f61-8905-b57f58c22571")

exports.run = async (client, message, args) => {
  await message.delete();
  let username = args[0];
  let platform = args[1] || "pc";

  if(!username) return message.reply("Please add a username to look up!");

  let data = fortnite.user(username, platform).then(data => {
    let stats = data.stats;

      let soloStats = stats.solo;
      let soloScore = soloStats.score;
      let soloKD = soloStats.kd;
      let soloPlayed = soloStats.matches;
      let soloKills = soloStats.kills;
      let soloWins = soloStats.wins;
      let soloTop3 = soloStats.top_3;

      let duoStats = stats.duo;
      let duoScore = duoStats.score;
      let duoKD = duoStats.kd;
      let duoPlayed = duoStats.matches;
      let duoKills = duoStats.kills;
      let duoWins = duoStats.wins;
      let duoTop3 = duoStats.top_3;

      let squadStats = stats.squad;
      let squadScore = squadStats.score;
      let squadKD = squadStats.kd;
      let squadPlayed = squadStats.matches;
      let squadKills = squadStats.kills;
      let squadWins = squadStats.wins;
      let squadTop3 = squadStats.top_3;

      let embed = new Discord.RichEmbed()
      .setTitle("Fortnite Stats")
      .setColor(`RANDOM`)
      .setDescription(`**${username}'s Stats!**`)
      .addField("Solo Wins", soloStats.wins, true)
      .addField("Duo Wins", duoStats.wins, true)
      .addField("Squad Wins", squadStats.wins, true)
      .addField("Solo Scores", soloStats.score, true)
      .addField("Duo Scores", duoStats.score, true)
      .addField("Squad Scores", squadStats.score, true)
      .addField("Solo K/D/R", soloStats.kd, true)
      .addField("Duo K/D/R", duoStats.kd, true)
      .addField("Squad K/D/R", squadStats.kd, true)
      .addField("Solo Matches", soloStats.matches, true)
      .addField("Duo Matches", duoStats.matches, true)
      .addField("Squad Matches", squadStats.matches, true)
      .addField("Solo Total Kills", soloStats.kills, true)
      .addField("Duo Total Kills", duoStats.kills, true)
      .addField("Squad Total Kills", squadStats.kills, true)
      .addField("Solo Total Top 3", soloStats.top_3, true)
      .addField("Duo Total Top 3", duoStats.top_3, true)
      .addField("Squad Total Top 3", squadStats.top_3, true)
      .setFooter(`Stats requested by ${message.author.username}`, message.author.displayAvatarURL);

      message.channel.send(embed);
    });
  }

exports.help = {
  name: "ftn"
}
