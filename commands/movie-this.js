var axios = require("axios");
var log = require("../log");

const IMDB = "Internet Movie Database";
const ROTTEN_TOMATOES = "Rotten Tomatoes"

function search(query) {
    log.toAll(`\nSearching for the movie, ${query}\n\n`);

    query = query.replace(/\s/g, "+");
    axios.get(
        "https://www.omdbapi.com/?t=" + query + "&apikey=trilogy"
    ).then(function(response) {
        log.toAll(getOutputString(response.data));
    }).catch(function(error) {
        console.log(error);
    })

}

function getRating(ratings, source) {
    ratings.forEach(rating => {
        if (rating.Source == source) {
            return rating.Value;
        }
    })
}

function getOutputString(data) {
    return `                  Title: ${data.Title}\n` +
           `                   Year: ${data.Year}\n` +
           `            IMDB Rating: ${getRating(data.Ratings, IMDB)}\n` +
           ` Rotten Tomatoes Rating: ${getRating(data.Ratings, ROTTEN_TOMATOES)}\n` +
           `       Country Produced: ${data.Country}\n` +
           `               Language: ${data.Language}\n` +
           `                   Plot: ${data.Plot}\n` +
           `                 Actors: ${data.Actors}\n\n`;
}

module.exports = {
    search: search
};