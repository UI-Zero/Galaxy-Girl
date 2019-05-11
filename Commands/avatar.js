exports.run = async (bot, msg, args) => {
  let request = await msg.channel.send("Generating Avatar...");
  let taggedUser = msg.mentions.users.first() || msg.author;

  await msg.channel.send({files: [
    {
      attachment: taggedUser.displayAvatarURL,
      name: "avatar.png"
    }
  ]});
  msg.delete();
}
exports.help = {
  name: "avatar"
}
