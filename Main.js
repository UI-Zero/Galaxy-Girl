const Discord = require("discord.js")
const Enmap = require("enmap")
const fs = require("fs")
const Canvas = require('canvas')
const client = new Discord.Client();
const config = require("./config.json")
client.config = config;

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.find(ch => ch.name === "welcome")
    if (!channel) return;

    const canvas = Canvas.createCanvas(700, 250);
    const ctx = canvas.getContext('2d');

    const background = await Canvas.loadImage('wallpaper.png');
    ctx.drawImage(background, 0,0, canvas.width, canvas.height);

    ctx.font = '28px sans-serif';
    ctx.fillStyle = '#74037b';
    ctx.fillText('Welcome to the Vast Discord!', canvas.width / 2.5, canvas.height / 3.5)

    ctx.font = '60px sans-serif';
    ctx.fillstyle = '#000000'
    ctx.fillText(member.displayName, canvas.width / 2.5, canvas.height / 1.8)

    ctx.beginPath();
    ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
    ctx.closePath();
    ctx.clip();

    const avatar = await Canvas.loadImage(member.user.displayAvatarURL);
    ctx.drawImage(avatar, 25, 25, 200, 200);

    const attachment = new Discord.Attachment(canvas.toBuffer(), 'welcome-iamge.png');

    channel.send(`Welcome to Vast, ${member}!`, attachment);
});

fs.readdir("./Events", (err, files) => {
    if (err) return console.error(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        const event = require(`./Events/${file}`);
        let eventName = file.split(".")[0];
        client.on(eventName, event.bind(null, client));
        delete require.cache[require.resolve(`./Events/${file}`)];
    });
});

client.commands = new Enmap();

fs.readdir("./Commands/", (err, files) => {
    if (err) return console.log(err);
    files.forEach(file => {
        if (!file.endsWith(".js")) return;
        let props = require(`./Commands/${file}`);
        let commandName = file.split(".")[0];
        console.log(`Loading ${commandName}`);
        client.commands.set(commandName, props)
    });
});

client.login(config.token);
