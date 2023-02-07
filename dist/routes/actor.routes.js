"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const actor_controller_1 = require("../controllers/actor.controller");
const ActorValidations_1 = require("../validation/ActorValidations");
const ValidationMiddleware_1 = __importDefault(require("../middlewares/ValidationMiddleware"));
const router = (0, express_1.Router)();
//actor
/**
 *
 * Post an actor
 *    RequiredRoles: None
 *
 * @section actors
 * @type post
 * @url /v1/actors
 * @param {string} role (EXPLORER| MANAGER| ADMINISTRATOR| SPONSOR)
 */
router.post("/v1/actors", ActorValidations_1.creationValidator, ValidationMiddleware_1.default, actor_controller_1.addActor);
/**
 *
 * Post an actor
 *    RequiredRoles: administrator
 *
 * @section actors
 * @type get
 * @url /v1/actors
 * @param {string} role (EXPLORER| MANAGER| ADMINISTRATOR| SPONSOR)
 */
router.get("/v1/actors", actor_controller_1.getAllActors);
/**
 *
 * Post an actor
 *    RequiredRoles: administrator
 *
 * @section actors
 * @type get
 * @url /v1/actors
 * @param {string} role (EXPLORER| MANAGER| ADMINISTRATOR| SPONSOR)
 */
router.get("/v1/actors/:id", actor_controller_1.getActor);
/**
 *
 * Post an actor
 *    RequiredRoles: administrator
 *
 * @section actors
 * @type get
 * @url /v1/actors
 * @param {string} role (EXPLORER| MANAGER| ADMINISTRATOR| SPONSOR)
 */
router.put("/v1/actors/:id", ActorValidations_1.creationValidator, ValidationMiddleware_1.default, actor_controller_1.updateActor);
/**
 *
 * Post an actor
 *    RequiredRoles: administrator
 *
 * @section actors
 * @type get
 * @url /v1/actors
 * @param {string} role (EXPLORER| MANAGER| ADMINISTRATOR| SPONSOR)
 */
router.delete("/v1/actors/:id", actor_controller_1.deleteActor);
/**
 *
 * Post an actor
 *    RequiredRoles: administrator
 *
 * @section actors
 * @type get
 * @url /v1/actors
 * @param {string} role (EXPLORER| MANAGER| ADMINISTRATOR| SPONSOR)
 */
router.patch("/v1/actors/:id/activated", actor_controller_1.deleteActor);
exports.default = router;
