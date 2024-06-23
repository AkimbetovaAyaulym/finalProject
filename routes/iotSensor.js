const express = require('express');
const router = express.Router();
const IotSensor = require('../model/iotSensor')
const mongoose = require('mongoose');

router.get('/light', (req, res, next) => {
    IotSensor.find().lean()
        .exec((err, items) => {
            if (!err) {
                let obj = items.find(o => o.truck === '/v1.6/devices/garden/light');
                return res.json({ data: obj.m })
            }
        })
})

router.get('/soil', (req, res, next) => {
    IotSensor.find().lean()
        .exec((err, items) => {
            if (!err) {
                let obj = items.find(o => o.truck === '/v1.6/devices/garden/soil');
                return res.json({ data: obj.m })
            }
        })
})

router.get('/temp', (req, res, next) => {
    IotSensor.find().lean()
        .exec((err, items) => {
            if (!err) {
                let obj = items.find(o => o.truck === '/v1.6/devices/garden/temp');
                return res.json({ data: obj.m })
            }
        })
})

router.get('/motor', (req, res, next) => {
    IotSensor.find().lean()
        .exec((err, items) => {
            if (!err) {
                let obj = items.find(o => o.truck === '/v1.6/devices/garden/motor');
                return res.json({ data: obj.m })
            }
        })
})

module.exports = router;