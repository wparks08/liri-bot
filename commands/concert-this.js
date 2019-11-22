var axios = require("axios");
var moment = require("moment");
var log = require("../log");

function search(query) {
    log.toAll(`\nSearching for ${query} concerts...\n\n`);

    query = query.replace(/\s/g, "+");
    axios.get(
      "https://rest.bandsintown.com/artists/" + query +"/events?app_id=codingbootcamp"
    ).then(function(response) {
        response.data.forEach(event => {
            log.toAll(getOutputString(event));
        });
    }).catch(function(error) {
        console.log(error);
    });
}

function getOutputString(event) {
    return `    Venue: ${event.venue.name}\n` +
           ` Location: ${event.venue.city}, ${event.venue.region}, ${event.venue.country}\n` +
           `     Date: ${moment(event.datetime).format("MM/DD/YYYY h:mm a")}\n\n`;
}

module.exports = {
    search: search
}