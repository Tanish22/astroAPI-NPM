const request = require("request");

const baseurl = "https://json.astrologyapi.com/v1/";

const userId="615975"
const apiKey="b827d6464db1f03fe745b6245f923880"

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


var birthDetails = async (resource, data) => {
    const url = baseurl + resource;

    var auth = "Basic " + Buffer.from(`${userId}:${apiKey}`).toString("Base64");

    return new Promise((resolve, reject) => {
        return request.post({
            headers: {
                "Authorization": auth,
                "Content-Type": "application/x-www-form-urlencoded",
                "Accept-Language": "en"
            },
            form: data,
            url
        }, function (error, response, body) {
            resolve(JSON.parse(body));
        }, function (err) {
            reject(JSON.parse(err));
        });
    });
};

birthDetails('birth_details', form).then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});

exports.birthDetails = birthDetails;


