const api = require('./index');
const assert = require('assert');

describe("SAMPLE unit test", function () {
    it('should return true if API status is 200', function (done) {
        api.convertAmt({ to: 'INR', from: 'USD', amt: 1 },
            function (res) {
                let response = (res.date) ? true : false;
                assert.equal(response, true);
                done();
            })
    })
})
