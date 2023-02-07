import { Router } from "express";
import {
  addActor,
  getAllActors,
  getActor,
  updateActor,
  deleteActor,
} from "../controllers/actor.controller";
import { creationValidator } from "../validation/ActorValidations";
import handleValidation from "../middlewares/ValidationMiddleware";

const router = Router();
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
router.post("/v1/actors", creationValidator, handleValidation, addActor);


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
router.get("/v1/actors", getAllActors);

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
router.get("/v1/actors/:id", getActor);

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
router.put("/v1/actors/:id", creationValidator, handleValidation, updateActor);

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
router.delete("/v1/actors/:id", deleteActor);

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
router.patch("/v1/actors/:id/activated", deleteActor)

export default router;
