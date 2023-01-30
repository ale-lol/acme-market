import {model, Schema} from "mongoose";

export interface interTripApplication {
    moment: Date
    status: string
    comments: string
    denied: boolean
    reason: string
}

const tripApplicationSchema = new Schema({
    create_date:{
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'PENDING',
        enum: ['PENDING', 'REJECTED', 'CANCELLED', 'ACCEPTED', 'DUE']
    },
    comments: {
        type: String,
        required: true,
    },
    denied: {
        type: Boolean,
        required: false
    },
    reason:{
        type: String,
        required: false
    }
})

export default model<interTripApplication>('Trip_Application', tripApplicationSchema)