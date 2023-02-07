import {model, Schema} from "mongoose";

export interface interTripApplication {
    create_date: Date
    status: string
    comments: string
    denied: boolean
    reason: string
    isPaid: boolean
}

const tripApplicationSchema = new Schema({
    create_date:{
        type: Date,
        default: Date.now
    },
    status: {
        type: String,
        default: 'PENDING',
        require: "Kindly enter the application status",
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
    },
    isPaid:{
        type: Boolean,
        require: false
    }
})


export default model<interTripApplication>('Application', tripApplicationSchema)