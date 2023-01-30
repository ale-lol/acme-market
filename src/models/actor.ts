import { model, Schema, Document } from "mongoose";


export interface interActor extends Document{
    type: string;
    name: string;
    surname: string;
    email: string;
    phone_number: string;
    address: string;
}

const actorSchema = new Schema({
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
  address:{
    type: String,
    require: false
  }
});

export default model<interActor>('Actor', actorSchema)
