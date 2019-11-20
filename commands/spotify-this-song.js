var Spotify = require("node-spotify-api");
var keys = require("../keys.js");

var spotify = new Spotify(keys.spotify);

function search(query) {
    if (!query) {
        spotify
          .request("https://api.spotify.com/v1/tracks/0hrBpAOgrt8RXigk83LLNE") //The Sign by Ace of Base
          .then(function(response) {
            displayTrack(response);
          })
          .catch(function(error) {
            console.log(error);
          });
    } else {
        spotify
            .search({ type: "track", query: query, limit: 1 })
            .then(function(response) {
                displayTrack(response.tracks.items[0]);
            })
            .catch(function(error) {
                console.log(error);
            });
    }
}

function displayTrack(track) {
    console.log(`Artist: ${track.artists[0].name}`);
    console.log(`Song Title: ${track.name}`);
    console.log(
      `Preview Link: ${track.external_urls.spotify}`
    );
    console.log(`Album: ${track.album.name}`);
}

module.exports = {
    search: search
}