"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actor_controller_1 = require("../controllers/actor.controller");
const router = (0, express_1.Router)();
//actor
router.post('/v1/actor', actor_controller_1.addActor);
router.get('/v1/actor', actor_controller_1.getAllActors);
router.get('/v1/actor/:id', actor_controller_1.getActor);
router.put('/v1/actor/:id', actor_controller_1.updateActor);
router.delete('/v1/actor/:id', actor_controller_1.deleteActor);
exports.default = router;
