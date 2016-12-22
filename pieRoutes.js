(function() {
    'use strict';

    var express = require('express');
    var pieRoutes = express.Router();
    // var Gpio = require('onoff').Gpio;
    // var led = new Gpio(14, 'out');

    pieRoutes.post('/pie', function(req, res) {

      res.status(200).json({ body: req.body.id });
    });

    module.exports = {
        routes: function() {
            return pieRoutes;
        }
    };
})();
