"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const appController_1 = require("../controllers/appController");
const appController_2 = require("../controllers/appController");
const router = (0, express_1.Router)();
router.post("/weather", appController_1.getWeatherData);
router.get('/api/weatherDashboard', appController_2.getWeatherDashboard);
router.post('/api/saveWeatherMapping', appController_1.getemailData);
exports.default = router;
