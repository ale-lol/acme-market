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
        !req.body.role ||
        !req.body.password) {
        return res.status(400).json({ msg: "Please send a valid actor" });
    }
    const newActor = new actor_1.default(req.body);
    try {
        const actor = yield newActor.save();
        res.json(actor);
    }
    catch (err) {
        if (err.name === "ValidationError") {
            res.status(422).send(err);
        }
        else {
            res.status(500).send(err);
        }
    }
});
exports.addActor = addActor;
//get all actors
const getAllActors = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const actors = yield actor_1.default.find();
        res.json(actors);
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getAllActors = getAllActors;
//get actor by id
const getActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = req.params.id;
        const actorFound = yield actor_1.default.findById(id).exec();
        if (actorFound) {
            res.status(200).json(actorFound);
        }
        else {
            res.status(404).send({ msg: "Actor not found" });
        }
    }
    catch (err) {
        res.status(500).send(err);
    }
});
exports.getActor = getActor;
//update actor
const updateActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = req.params.id;
    if (!req.body) {
        return res.status(422).send("Invalid values");
    }
    try {
        const { role, name, surname, email, phone_number, address, isActivated } = req.body;
        const actor = yield actor_1.default.findOneAndUpdate({ _id: id }, {
            $set: {
                role,
                name,
                surname,
                email,
                phone_number,
                address,
                isActivated,
            },
        }, { new: true });
        if (actor) {
            res.status(200).json(actor);
        }
        else {
            res.status(404).send("Actor not found");
        }
    }
    catch (err) {
        if (err.name == "ValidationError") {
            res.status(422).send(err);
        }
        res.status(500).send(err);
    }
});
exports.updateActor = updateActor;
//remove actor
const deleteActor = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { id } = req.params;
    try {
        const result = yield actor_1.default.findByIdAndDelete(id);
        if (result === null) {
            return res.status(404).send("Actor not found");
        }
        else {
            return res.send(result);
            //return res.json({ msg: "Actor succesfully deleted" });
        }
    }
    catch (err) {
        return res.status(500).send(err).json();
    }
});
exports.deleteActor = deleteActor;
//activate or desactivate
