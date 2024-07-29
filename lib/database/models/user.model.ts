import { Document, Schema, model, models } from "mongoose";

export interface IUser extends Document {
  clerkId: string;
  email: string;
  username: string;
  photo: string; 
  firstName?: string; 
  lastName?: string;
  creditBalance: number;
  planId: number;
 
}

const UserSchema = new Schema({
    clerkId: { type: String, required: true,unique:true },
    email: { type: String, required: true,unique:true },
    username: { type: String, required: true,unique:true },
    photo: { type: String,required:true},
    firstName: { type: String },
    lastName: { type: String},
    creditBalance: { type: Number,default:10 },
  planId: { type: Number,default:1 },
});

const User = models?.User || model('User', UserSchema);

export default User;