var fs = require("fs");

function toFile(message) {
    fs.appendFile(process.env.LOG_FILE, message, (error) => {
        if (error) {
            throw (error);
        }
    })
}

function toConsole(message) {
    console.log(message);
}

function toAll(message) {
    toFile(message);
    toConsole(message);
}

module.exports = {
    toFile: toFile,
    toConsole: toConsole,
    toAll: toAll
}