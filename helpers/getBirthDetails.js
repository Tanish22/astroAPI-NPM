const {birthDetails} = require("../app.js")

const resrc = "birth_details";

// const form = {
//     day: '1',
//     month: '3',
//     year: '2021',
//     hour: '9',
//     min: '35',
//     lat: '19.2200',
//     lon: '72.2200',
//     tzone: '5.5'
// };

birthDetails(resrc).then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});