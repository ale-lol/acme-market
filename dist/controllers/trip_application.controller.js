"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteApplication = exports.updateApplication = exports.getApplicationById = exports.getAllApplications = exports.addTripApplication = void 0;
const trip_application_1 = __importDefault(require("../models/trip_application"));
//create application
const addTripApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.moment || !req.body.status) {
        return res.status(400).json({ msg: "Please, insert a valid application" });
    }
    const newTripApplication = new trip_application_1.default(req.body);
    yield newTripApplication.save();
    return res.status(201).json(newTripApplication);
});
exports.addTripApplication = addTripApplication;
//get all applications
const getAllApplications = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const applications = yield trip_application_1.default.find();
    return res.send(applications);
});
exports.getAllApplications = getAllApplications;
//get application by id
const getApplicationById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const applicationFound = yield trip_application_1.default.findById(id);
    return res.send(applicationFound);
});
exports.getApplicationById = getApplicationById;
//update application
const updateApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const { create_date, status, comments, denied, reason } = req.body;
    const newApplication = yield trip_application_1.default.updateOne({ _id: id }, { create_date, status, comments, denied, reason });
    return res.send(newApplication);
});
exports.updateApplication = updateApplication;
//remove application by id
const deleteApplication = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield trip_application_1.default.findByIdAndDelete(id);
    if (!result) {
        return res.status(404).json({ msg: "Application not found" });
    }
    return res.status(200).json(result);
});
exports.deleteApplication = deleteApplication;
