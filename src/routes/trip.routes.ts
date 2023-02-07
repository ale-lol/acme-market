import { Router } from "express";
import {
  addTrip,
  getAllTrips,
  getTrip,
  updateTrip,
  deleteTrip,
} from "../controllers/trip.controller";

import {creationValidator} from '../validation/TripValidation'
import handleValidation from '../middlewares/ValidationMiddleware'


const router = Router();

router.post("/v1/trips",creationValidator,handleValidation, addTrip);
router.get("/v1/trips", getAllTrips);
router.get("/v1/trips/:id", getTrip);
router.put("/v1/trips/:id",creationValidator,handleValidation, updateTrip);
router.delete("/v1/trips/:id", deleteTrip);

export default router;
