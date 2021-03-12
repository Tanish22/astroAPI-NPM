const request = require("request");

const baseurl = "https://json.astrologyapi.com/v1/birth_details";

const form = {
    day: '1',
    month: '3',
    year: '2021',
    hour: '9',
    min: '35',
    lat: '19.2200',
    lon: '72.2200',
    tzone: '5.5'
};

var birthDetails = async () => {
    var auth = "Basic " + Buffer.from(`${userId}:${apiKey}`).toString("Base64");
    return new Promise((resolve, reject) => {
        return request.post({
            headers: {
                "Authorization": auth,
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Language": "en"
            },
            form,
            url: baseurl
        }, function (error, response, body) {
            resolve(JSON.parse(body));
        }, function (err) {
            reject(JSON.parse(err));
        });
    });
};

module.exports = birthDetails;
