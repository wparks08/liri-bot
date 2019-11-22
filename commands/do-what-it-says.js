var fs = require("fs");

function getDataFromFile() {
    return fs
        .readFileSync("./random.txt", "utf8")
        .replace("\r", "")
        .replace("\n", "")
        .split(",");
}

module.exports = {
    getDataFromFile: getDataFromFile
}