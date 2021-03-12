const birthDetails = require("./helpers/getBirthDetails");

birthDetails().then(function (response) {
    console.log(response);
}, function (error) {
    console.log(error);
});