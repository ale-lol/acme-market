"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const actorSchema = new mongoose_1.Schema({
    type: {
        type: String,
        required: 'Kindly enter the actor role(s)',
        enum: ['EXPLORER', 'MANAGER', 'ADMINISTRATOR']
    },
    name: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone_number: {
        type: Number,
        require: false,
    },
    address: {
        type: String,
        require: false
    }
});
exports.default = (0, mongoose_1.model)('Actor', actorSchema);
