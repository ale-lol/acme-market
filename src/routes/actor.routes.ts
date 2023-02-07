import {Router} from "express"
import { addActor, getAllActors, getActor, updateActor, deleteActor } from "../controllers/actor.controller"
import {creationValidator} from '../validation/ActorValidations'


const router = Router()
//actor
router.post('/v1/actor', addActor)

router.get('/v1/actor', getAllActors)

router.get('/v1/actor/:id', getActor)

router.put('/v1/actor/:id', updateActor)

router.delete('/v1/actor/:id', deleteActor)



export default router