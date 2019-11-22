var Spotify = require("node-spotify-api");
var keys = require("../keys.js");
var log = require("../log");

var spotify = new Spotify(keys.spotify);

function search(query) {
  log.toAll(`\nSearching for a song titled ${query}\n\n`);
    if (!query) {
        spotify
          .request("https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE") //The Sign by Ace of Base
          .then(function(response) {
            log.toAll(getOutputString(response));
          })
          .catch(function(error) {
            console.log(error);
          });
    } else {
        spotify
            .search({ type: "track", query: query, limit: 1 })
            .then(function(response) {
                log.toAll(getOutputString(response.tracks.items[0]));
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

function getOutputString(track) {
    return `       Artist: ${track.artists[0].name}\n` +
           `   Song Title: ${track.name}\n` +
           ` Preview Link: ${track.external_urls.spotify}\n` +
           `        Album: ${track.album.name}\n`;
}

module.exports = {
    search: search
}