require("dotenv").config();

var axios = require("axios");
var fs = require("fs");

var keys = require("./keys.js");
var commands = require("./commands");

var command = process.argv[2];
var parameter = process.argv.slice(3).join(" ");

console.log(""); //give some whitespace before result

function processCommand() {
    switch (command) {
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
            var data = commands.doWhatItSays.getDataFromFile();
            command = data[0];
            parameter = data[1];
            if (command != "do-what-it-says") {
                processCommand();
            } else {
                console.log("File data invalid. Please use one of:\n    concert-this\n    spotify-this-song\n    movie-this\nIn the file.")
            }
            break;
        default:
            console.log("Unrecognized command. Please use one of:\n    concert-this\n    spotify-this-song\n    movie-this\n    do-what-it-says");
    }
}

processCommand();
