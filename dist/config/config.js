"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    DB: {
        URI: process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/ACME',
        USER: process.env.DB_USER || "",
        PASSWORD: process.env.DB_PASSWORD || "",
    },
};
