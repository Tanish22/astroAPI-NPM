//const request = require("request");
const axios = require("axios");

const baseurl = "https://json.astrologyapi.com/v1/birth_details";

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

const birthDetails = async () => {
    var auth = "Basic " + Buffer.from(`${userId}:${apiKey}`).toString("Base64");

    try{
        return await axios.post(            
            baseurl,
            form,
            {
                headers: {
                    "Authorization": auth,
                    "Content-Type": "application/x-www-form-urlencoded",
                    "Accept-Language": "en"
                }
            }            
        );
    }    
    catch(error){
        console.log(error);
    }
}


// const birthDate = () => {
//     const astroData = async () => {
//         return await request.post({
//             headers: {
//                 "Authorization": auth,
//                 "Content-Type": "application/x-www-form-urlencoded",
//                 "Accept-Language": "en"
//             },
//             form,
//             url: baseurl
//         },(err, response, body) => {
//             console.log(JSON.parse(body));
//         },
//         )
//     }
// }