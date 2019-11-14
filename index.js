const axios = require('axios');

function getResult(params, callback) {
    const {to, from, amt } = params;
    let amut = (amt) ? amt : 1;
    axios.get(`https://dry-cove-37966.herokuapp.com/?to=${to}&from=${from}&amt=${amut}`)
        .then((res) => {
            callback(res.data);
        })
        .catch((err) => {
            callback(err);
        });
}

module.exports = {
    convertAmt: getResult 
}
