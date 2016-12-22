(function() {
    'use strict';

    var express = require('express');
    var pieRoutes = express.Router();
    var Gpio = require('onoff').Gpio;
    var led = new Gpio(14, 'out');

    pieRoutes.get('/gpio14on', function(req, res) {
      led.writeSync(1);
      res.status(200).json({ status: 'on' });
    });

    pieRoutes.get('/gpio14off', function(req, res) {
      led.writeSync(0);
      res.status(200).json({ status: 'off' });
    });

    module.exports = {
        routes: function() {
            return pieRoutes;
        }
    };
})();
