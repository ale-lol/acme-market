import { model, Schema } from 'mongoose'
import bcrypt from 'bcrypt'

export interface interActor{
    role: string;
    name: string;
    password: string;
    surname: string;
    email: string;
    phone_number: string;
    address: string;
    isActivated: boolean;
}

const actorSchema = new Schema({
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
  address:{
    type: String,
    require: false
  },
  isActivated:{
    type: Boolean,
    require:false
  }
});

actorSchema.pre('save', function (callback) {
  const actor = this
  // Break out if the password hasn't changed
  // if (!actor.isModified('password')) return callback()

  // Password changed so we need to hash it
  bcrypt.genSalt(5, function (err, salt) {
    if (err) return callback(err)

    bcrypt.hash(actor.password, salt, function (err, hash) {
      if (err) return callback(err)
      actor.password = hash
      callback()
    })
  })
})


actorSchema.methods.verifyPassword = function (password: string, cb: any) {
  bcrypt.compare(password, this.password, function (err, isMatch) {
    // console.log('verifying password in actorModel: ' + password)
    if (err) return cb(err)
    // console.log('iMatch: ' + isMatch)
    cb(null, isMatch)
  })
}

export default model<interActor>('Actor', actorSchema)
