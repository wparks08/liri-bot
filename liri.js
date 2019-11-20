require("dotenv").config();

var axios = require("axios");
var fs = require("fs");
var Spotify = require("node-spotify-api");

var keys = require("./keys.js");

var spotify = new Spotify(keys.spotify);

var command = process.argv[2];
var parameter = process.argv.slice(3).join(" ");

switch(command) {
    case "concert-this":
        //do stuff
        break;
    case "spotify-this-song":
        //do stuff
        break;
    case "movie-this":
        //do stuff
        break;
    case "do-what-it-says":
        //do stuff
        break;
    default:
        console.log("Unrecognized command. Please use one of:\nconcert-this\nspotify-this-song\nmovie-this\ndo-what-it-says");
}


spotify
    .search({ type: 'track', query: parameter })
    .then(function(response) {
        console.log(JSON.stringify(response, null, 2));
    }).catch(function(error) {
        console.log(error);
    });