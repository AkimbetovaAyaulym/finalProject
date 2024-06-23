var ubidots = require('ubidots');
var client = ubidots.createClient('BBUS-vLMeqqA1T5zMXudRX0pJGri7nxc7rx');

client.auth(function () {
    this.getDatasources(function (err, data) {
        console.log('datasources', data.results);
    });

    var ds = this.getDatasource('62caff6f1f7e0b2fea8c1d5e');

    ds.getVariables(function (err, data) {
        console.log('variables', data.results);
    });

    ds.getDetails(function (err, details) {
        // console.log('details ds', details);
    });
    var v = this.getVariable('62cb01921d84722bea030b6e');

    v.getDetails(function (err, details) {
        // console.log('details v', details);
    })

    // v.saveValue(30)

    v.getValues(function (err, data) {
        console.log('vals', data.results);
    });


});

