module.exports = (client) => {
    console.log("Zero is finally awake smfh")
    client.user.setActivity("Some Games", {
  	type: "STREAMING",
  	url: "https://www.twitch.tv/ui_zero"
	});
}