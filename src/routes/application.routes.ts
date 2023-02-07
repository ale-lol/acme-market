import { Router } from "express";
import {
  addTripApplication,
  getAllApplications,
  getApplicationById,
  updateApplication,
  deleteApplication,
  deniedApplication,
} from "../controllers/application.controller";
import {creationValidator} from '../validation/ApplicationValidation'
import handleValidation from '../middlewares/ValidationMiddleware'

const router = Router();

router.post("/v1/applications",creationValidator,handleValidation, addTripApplication);
router.get("/v1/applications", getAllApplications);
router.get("/v1/applications/:id", getApplicationById);
router.put("/v1/applications/:id",creationValidator,handleValidation, updateApplication);
router.delete("/v1/applications/:id", deleteApplication);
router.patch("/v1/applications/:id/denied", deniedApplication);

export default router;
