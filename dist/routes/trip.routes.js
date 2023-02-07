"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const trip_controller_1 = require("../controllers/trip.controller");
const TripValidation_1 = require("../validation/TripValidation");
const ValidationMiddleware_1 = __importDefault(require("../middlewares/ValidationMiddleware"));
const router = (0, express_1.Router)();
router.post("/v1/trips", TripValidation_1.creationValidator, ValidationMiddleware_1.default, trip_controller_1.addTrip);
router.get("/v1/trips", trip_controller_1.getAllTrips);
router.get("/v1/trips/:id", trip_controller_1.getTrip);
router.put("/v1/trips/:id", TripValidation_1.creationValidator, ValidationMiddleware_1.default, trip_controller_1.updateTrip);
router.delete("/v1/trips/:id", trip_controller_1.deleteTrip);
exports.default = router;
