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
exports.deleteActor = exports.updateActor = exports.getActor = exports.getAllActors = exports.addActor = void 0;
const actor_1 = __importDefault(require("../models/actor"));
//create actor
const addActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    if (!req.body.name ||
        !req.body.surname ||
        !req.body.email ||
        !req.body.actor_type) {
        return res.status(400).json({ msg: "Please send a valid actor" });
    }
    const newActor = new actor_1.default(req.body);
    yield newActor.save();
    return res.status(201).json(newActor);
});
exports.addActor = addActor;
//get all actors
const getAllActors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const actorsList = yield actor_1.default.find();
    return res.send(actorsList);
});
exports.getAllActors = getAllActors;
//get actor by id
const getActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const actorFound = yield actor_1.default.findById(id).exec();
    return res.send(actorFound);
});
exports.getActor = getActor;
//update actor
const updateActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    const { actor_type, name, surname, email, phone_number, address } = req.body;
    const newActor = yield actor_1.default.updateOne({ _id: id }, { $set: { actor_type, name, surname, email, phone_number, address } });
    return res.send(newActor);
});
exports.updateActor = updateActor;
//remove actor
const deleteActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    const result = yield actor_1.default.findByIdAndDelete(id);
    return res.send(result);
});
exports.deleteActor = deleteActor;
