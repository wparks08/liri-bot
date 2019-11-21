// var concertThis = require('./commands/concert-this.js');
// var doWhatItSays = require('./commands/do-what-it-says.js');
// var movieThis = require('./commands/movie-this.js');
// var spotifyThisSong = require('./commands/spotify-this-song.js');

module.exports = {
    concertThis: require('./concert-this'),
    doWhatItSays: require('./do-what-it-says'),
    movieThis: require('./movie-this'),
    spotifyThisSong: require('./spotify-this-song')
}