import {model, Schema} from "mongoose";

export interface interSponsorship {
    banner: String
    payed: boolean
}

const SponsorshipSchemma = new Schema({
    banner: {
        type: String,
        require: true
    },
    payed:{
        type: Boolean,
    }
})


export default model<interSponsorship>('Sponsorship', SponsorshipSchemma)