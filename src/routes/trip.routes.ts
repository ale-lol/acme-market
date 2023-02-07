import { Router } from "express";
import {
  addTrip,
  getAllTrips,
  getTrip,
  updateTrip,
  deleteTrip,
} from "../controllers/trip.controller";

const router = Router();

router.post("/v1/trip", addTrip);
router.get("/v1/trip", getAllTrips);
router.get("/v1/trip/:id", getTrip);
router.put("/v1/trip/:id", updateTrip);
router.delete("/v1/trip/:id", deleteTrip);

export default router;
