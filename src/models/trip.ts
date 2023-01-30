import { model, Schema } from "mongoose";

export interface interTrip {
  ticker: string;
  title: string;
  description: string;
  price: number;
  list_of_requirements: string[];
  start_date: String;
  end_date: string;
  pictures: string[];
  cancelled: boolean;
  reason: string;
}

export interface Stage {
    title: string
    description: string
    price:number
}

const tripSchema = new Schema({
  ticker: {
    type: String,
    require: false,
  },
  title: {
    type: String,
    require: true,
  },
  description: {
    type: String,
    require: true,
  },
  stages:{
    type: Object,
    required: true
  },
  price: {
    type: Number,
    require: true,
  },
  list_of_requirements: {
    type: Array,
    require: true,
  },
  start_date: {
    type: String,
    require: true,
  },
  end_date: {
    type: String,
    require: true,
  },
  pictures: {
    type: Array,
    require: false,
  },
  cancelled: {
    type: Boolean,
    require: false,
  },
  reason: {
    type: String,
    required: false,
  },
});

tripSchema.pre<interTrip>('save', function (next) {
  const banco = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let random = "";
  for (let i = 0; i < 4; i++) {
    random += banco.charAt(Math.floor(Math.random() * banco.length));
  }
  this.ticker = `${this.start_date}-${random}`
  next()
});
export default model<interTrip>("Trip", tripSchema);
