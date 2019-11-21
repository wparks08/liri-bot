require("dotenv").config();

var axios = require("axios");
var fs = require("fs");

var keys = require("./keys.js");
var commands = require("./commands");

var command = process.argv[2];
var parameter = process.argv.slice(3).join(" ");

console.log(""); //give some whitespace before result

switch(command) {
    case "concert-this":
        commands.concertThis.search(parameter);
        break;
    case "spotify-this-song":
        commands.spotifyThisSong.search(parameter);
        break;
    case "movie-this":
        commands.movieThis.search(parameter);
        break;
    case "do-what-it-says":
        //do stuff
        break;
    default:
        console.log("Unrecognized command. Please use one of:\nconcert-this\nspotify-this-song\nmovie-this\ndo-what-it-says");
}