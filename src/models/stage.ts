import { model, Schema } from "mongoose";

export interface interStage {
    title: string
    description: string
    price:number
}

const stage = new Schema({
  title: {
    type: String,
    require: false,
  },
  description: {
    type: String,
    require: true,
  },
  price: {
    type: Number,
    require: true,
  }
});

export default model<interStage>("Stage", stage);
