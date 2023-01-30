import { Router } from "express";
import { addTripApplication, getAllApplications, getApplicationById, updateApplication, deleteApplication } from '../controllers/trip_application.controller';

const router = Router();

router.post('/v1/application', addTripApplication)
router.get('/v1/application', getAllApplications)
router.get('/v1/application/:id', getApplicationById)
router.put('/v1/application/:id', updateApplication)
router.delete('/v1/application/:id', deleteApplication)

export default router
