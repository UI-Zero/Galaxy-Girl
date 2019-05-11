const Discord = require("discord.js");
const superagent = require("superagent");

exports.run = async (client, message, args) => {

    let hugUser = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if(!hugUser) return message.channel.send("Make sure you mention someone!");

    const {body} = await superagent
    .get(`https://nekos.life/api/v2/img/hug`);

    let hugEmbed = new Discord.RichEmbed()
    .setTitle("Hug! c:")
    .setDescription(`**${message.author.username}** hugged **${message.mentions.users.first().username}**!`)
    .setImage(body.url)
    .setColor("RANDOM");

    message.channel.send(hugEmbed)

}

exports.help = {
    name: "hug"
}