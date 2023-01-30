"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const morgan_1 = __importDefault(require("morgan"));
const cors_1 = __importDefault(require("cors"));
require("./routes/actor.routes");
const actor_routes_1 = __importDefault(require("./routes/actor.routes"));
const trip_routes_1 = __importDefault(require("./routes/trip.routes"));
const trip_application_routes_1 = __importDefault(require("./routes/trip_application.routes"));
//initializations
const app = (0, express_1.default)();
//settings
app.set('port', process.env.PORT || 5000);
//middlewares
app.use((0, morgan_1.default)('dev'));
app.use((0, cors_1.default)());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(express_1.default.json());
//routes
app.get('/', (_req, res) => {
    res.send(`API running at port: ${app.get('port')}`);
});
app.use(actor_routes_1.default);
app.use(trip_routes_1.default);
app.use(trip_application_routes_1.default);
exports.default = app;
