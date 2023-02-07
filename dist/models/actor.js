"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const bcrypt_1 = __importDefault(require("bcrypt"));
const actorSchema = new mongoose_1.Schema({
    role: {
        type: String,
        required: 'Kindly enter the actor role(s)',
        enum: ['EXPLORER', 'MANAGER', 'ADMINISTRATOR', 'SPONSOR']
    },
    name: {
        type: String,
        required: 'Kindly enter the actor name',
    },
    password: {
        type: String,
        required: true,
    },
    surname: {
        type: String,
        require: 'Kindly enter the actor surname',
    },
    email: {
        type: String,
        required: 'Kindly enter the actor email',
    },
    phone_number: {
        type: Number,
        require: false,
    },
    address: {
        type: String,
        require: false
    },
    isActivated: {
        type: Boolean,
        require: false
    }
});
actorSchema.pre('save', function (callback) {
    const actor = this;
    // Break out if the password hasn't changed
    // if (!actor.isModified('password')) return callback()
    // Password changed so we need to hash it
    bcrypt_1.default.genSalt(5, function (err, salt) {
        if (err)
            return callback(err);
        bcrypt_1.default.hash(actor.password, salt, function (err, hash) {
            if (err)
                return callback(err);
            actor.password = hash;
            callback();
        });
    });
});
actorSchema.methods.verifyPassword = function (password, cb) {
    bcrypt_1.default.compare(password, this.password, function (err, isMatch) {
        // console.log('verifying password in actorModel: ' + password)
        if (err)
            return cb(err);
        // console.log('iMatch: ' + isMatch)
        cb(null, isMatch);
    });
};
exports.default = (0, mongoose_1.model)('Actor', actorSchema);
