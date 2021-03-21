const astroDataFunc = require("./app.js");

var astroURL = "birth_details";

var astroData = {
    day: '1',
    month: '3',
    year: '2021',
    hour: '9',
    min: '35',
    lat: '19.2200',
    lon: '72.2200',
    tzone: '5.5'
};

astroDataFunc.getAstroData(astroURL, astroData).then(function (res) {
    console.log(res.data)
});