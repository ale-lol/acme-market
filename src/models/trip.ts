import { model, Schema } from "mongoose";
import Stage,{interStage} from './stage'
export interface interTrip {
  ticker: string;
  title: string;
  description: string;
  price: number;
  list_of_requirements: string[];
  start_date: String;
  end_date: string;
  pictures: string[];
  published: boolean
  cancelled: boolean;
  reason: string;
  stages: interStage[]
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
  price: {
    type: Number,
    require: true,
  },
  list_of_requirements: {
    type: Array,
    require: true,
  },
  start_date: {
    type: Date,
    require: true,
  },
  end_date: {
    type: Date,
    require: true,
  },
  pictures: {
    type: Array,
    require: false,
  },
  published: {
    type: Boolean,
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
  stages: {
    type: Array<interStage>
  }
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

tripSchema.pre<interTrip>('save', function (next) {
  let total_price = 0
  this.stages.map((stage: interStage)=>{
      total_price +=stage.price
  })
  if(total_price == 0){
    this.price = 0
    next()
  }else this.price = total_price
  next()
});

export default model<interTrip>("Trip", tripSchema);
