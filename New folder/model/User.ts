import {model, Schema, Document} from "mongoose";
// HookNextFunction
// import bcrypt from "bcrypt";
import config from "../config/defaults";

export interface UserDocument extends Document {
 googleId: String,
  displayName: String,
  firstName: String,
  lastName: String,
  image: String,
  email: String,
 loggedInAt: Date
}

const UserSchema = new Schema({
  googleId: {
    type: String,
    required: true,
  },
  displayName: {
    type: String,
    required: true,
  },
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  image: {
    type: String,
  },
  email:{
    type:String,
    required: true,
  },
  loggedInAt: {
    type: Date,
    default: Date.now,
  },
})

const User = model<UserDocument>("User", UserSchema);

export default User;