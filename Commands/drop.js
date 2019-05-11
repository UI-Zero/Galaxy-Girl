exports.run = async (client, message, args) => {


let places = [
            "Lazy Lagoon",
            "Dusty Divot",
            "Fatal Fields",
            "Happy Hamlet",
            "Polar Peak",
            "Haunted Hills",
            "Junk Junction",
            "Lonely Lodge",
            "Loot Lake",
            "Lucky Landing",
            "Paradise Palms",
            "Pleasant Park",
            "Retail Row",
            "The Block",
            "Salty Springs",
            "Shifty Shafts",
            "Snobby Shores",
            "Tilted Towers",
            "Sunny Steps",
            "Wailing Woods"
        ];

        let picker = Math.floor(Math.random() * places.length);

        return message.channel.send(places[picker]);
};

exports.help = {
  name: "drop"
}