
module.exports = {
    resultsToJson: (results) => {
        let resultJson = JSON.stringify(results);
        resultJson = JSON.parse(resultJson);
        return resultJson;
    }
}


