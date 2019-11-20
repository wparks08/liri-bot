var axios = require("axios");
var moment = require("moment");

function search(query) {
    query = query.replace(/\s/g, "+");
    axios.get(
      "https://rest.bandsintown.com/artists/" + query +"/events?app_id=codingbootcamp"
    ).then(function(response) {
        response.data.forEach(event => {
            console.log(`Venue: ${event.venue.name}`);
            console.log(`Location: ${event.venue.city}, ${event.venue.region}, ${event.venue.country}`);
            console.log(`Date: ${moment(event.datetime).format("MM/DD/YYYY h:mm a")}`);
            console.log("--------------------");
        })
    }).catch(function(error) {
        console.log(error);
    });
}

module.exports = {
    search: search
}