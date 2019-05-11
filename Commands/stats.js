const Discord = require("discord.js")
const { version } = require("discord.js");
const moment = require("moment");
const m = require("moment-duration-format");
let os = require('os')
let cpuStat = require("cpu-stat")
const ms = require("ms")

exports.run = (client, message, args) => {
    let cpuLol;
    cpuStat.usagePercent(function(err, percent, seconds) {
        if (err) {
            return console.log(err);
        }
        const duration = moment.duration(client.uptime).format(" D [days], H [hrs], m [mins], s [secs]");
        const embedStats = new Discord.RichEmbed()
            .setAuthor(client.user.username)
            .setTitle("Hey! Thanks for checking in on me!")
            .setColor("RANDOM")
            .addField("• Brain Size", `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)} / ${(os.totalmem() / 1024 / 1024).toFixed(2)} MB`, true)
            .addField("• Awake Time ", `${duration}`, true)
            .addField("• Users", `${client.users.size.toLocaleString()}`, true)
            .addField("• Servers", `${client.guilds.size.toLocaleString()}`, true)
            .addField("• Channels ", `${client.channels.size.toLocaleString()}`, true)
            .addField("• Discord.js", `v${version}`, true)
            .addField("• Age", `${process.version}`, true)
            .addField("• CPU", `\`\`\`md\n${os.cpus().map(i => `${i.model}`)[0]}\`\`\``)
            .addField("• CPU usage", `\`${percent.toFixed(2)}%\``, true)
            .addField("• Arch", `\`${os.arch()}\``, true)
            .addField("• Platform", `\`\`${os.platform()}\`\``, true)
            .addField("Heartbeat", `${Math.round(client.ping)}ms`)  
        message.channel.send(embedStats)
    });
};


exports.help = {
    name: "stats"
}