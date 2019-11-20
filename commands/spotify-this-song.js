var Spotify = require("node-spotify-api");
var keys = require("../keys.js");

var spotify = new Spotify(keys.spotify);

function search(query) {
    spotify
      .search({ type: "track", query: query, limit: 1 })
      .then(function(response) {
        // console.log(JSON.stringify(response, null, 2));
        console.log(`Artist: ${response.tracks.items[0].artists[0].name}`);
        console.log(`Song Title: ${response.tracks.items[0].name}`);
        console.log(`Preview Link: ${response.tracks.items[0].external_urls.spotify}`);
        console.log(`Album: ${response.tracks.items[0].album.name}`);
      })
      .catch(function(error) {
        console.log(error);
      });
}

module.exports = {
    search: search
}