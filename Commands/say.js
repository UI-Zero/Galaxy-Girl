exports.run = (client, message, args) => {
    let text = args.join(" ");
    let user = message.author
    if(user.id !== `264119835275952139`) return
    message.delete();
    message.channel.send(text);
}
exports.help = {
    name: "say"
}