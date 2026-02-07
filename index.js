const HaxballJS = require("haxball.js");

const room = HaxballJS({
  roomName: "🔥 Sala 24/7 🔥",
  maxPlayers: 12,
  public: true,
  noPlayer: true,
  token: process.env.HAXBALL_TOKEN
});

room.setDefaultStadium("Big");
room.setScoreLimit(5);
room.setTimeLimit(5);

room.onPlayerJoin = (player) => {
  room.sendAnnouncement("Bienvenido " + player.name + " 👋", player.id);
});

console.log("HaxBall host iniciado");
