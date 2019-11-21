var axios = require("axios");

const IMDB = "Internet Movie Database";
const ROTTEN_TOMATOES = "Rotten Tomatoes"

function search(query) {
    query = query.replace(/\s/g, "+");
    axios.get(
        "https://www.omdbapi.com/?t=" + query + "&apikey=trilogy"
    ).then(function(response) {
        console.log(`Title: ${response.data.Title}`);
        console.log(`Year: ${response.data.Year}`);
        console.log(`IMDB Rating: ${getRating(response.data.Ratings, IMDB)}`);
        console.log(`Rotten Tomatoes Rating: ${getRating(response.data.Ratings, ROTTEN_TOMATOES)}`);
        console.log(`Country Produced: ${response.data.Country}`);
        console.log(`Language: ${response.data.Language}`);
        console.log(`Plot: ${response.data.Plot}`);
        console.log(`Actors: ${response.data.Actors}`);
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

module.exports = {
    search: search
};