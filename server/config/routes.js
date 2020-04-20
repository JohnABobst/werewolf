// const games = require("../controllers/games");
// const players = require("../controllers/players");
const path = require("path");

module.exports = function(app) {
    app.get("/api/games", (req, res) => {
        games.games(req, res);
    });
    app.delete("api/games/:id", (req, res) => {
        games.deleteGame(req, res);
    });
    app.post("api/games", (req, res) => {
        games.create(req, res);
    });
    app.get("api/games/:id", (req, res) => {
        games.game(req, res);
    });
    app.post("api/join/:id", (req, res) => {
        games.join(req, res);
    });
    // app.post("api/games/select/werewolf", (req, res) => {
    //     games.selectWerewolf(req, res);
    // });
    // app.post("api/games/select/villager", (req, res) => {
    //     games.selectVillager(req, res);
    // });
    app.all("*", (req, res, next) => {
        res.sendFile(path.resolve("./public/dist/public/index.html"));
    });
};