import express from 'express'
import morgan from 'morgan'
import cors from 'cors'
import './routes/actor.routes'
import actorRouter from './routes/actor.routes';
import tripRouter from './routes/trip.routes';
import applicationRouter from './routes/application.routes'

//initializations
const app = express();

//settings
app.set('port', process.env.PORT || 5000);

//middlewares
app.use(morgan('dev'))
app.use(cors())
app.use(express.urlencoded({extended: false}))
app.use(express.json())

//routes
app.get('/', (_req, res)=>{
    res.send(`API running at port: ${app.get('port')}`)
})

app.use(actorRouter)
app.use(tripRouter)
app.use(applicationRouter)

export default app