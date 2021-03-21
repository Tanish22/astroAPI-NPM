const axios = require("axios");
const { get } = require("request");

var userId = "615975";
var apiKey = "b827d6464db1f03fe745b6245f923880";

// var astroURL = "astro_details";

// var astroData = {
//     day: '1',
//     month: '3',
//     year: '2021',
//     hour: '9',
//     min: '35',
//     lat: '19.2200',
//     lon: '72.2200',
//     tzone: '5.5'
// };

const getAstroData = async (url, data) => {
    try{
        var auth = "Basic " + Buffer.from(`${userId}:${apiKey}`).toString("Base64");

        var baseurl = "https://json.astrologyapi.com/v1/";
        var endpoint = baseurl + url;

        return await axios.post(endpoint,data,
            
                {
                    headers: {
                        "Authorization": auth,
                        "Content-Type": "application/json",
                        "Accept-Language": "en"                
                    }  
                }                      
        )
    }
    catch(error) {
        console.log("error :", error.response.data);
    }
}

// getAstroData(astroURL, astroData).then((response) => {
//     console.log(response.data);
// })

exports.getAstroData = getAstroData;
