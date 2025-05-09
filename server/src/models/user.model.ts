import mongoose, { Schema, Document } from 'mongoose';

export interface IUser extends Document {
  name: string;
  email: string;
  phone?: string;
  password?: string;
  role: 'student' | 'consult' | 'software';
  provider: 'local' | 'google';
}

const userSchema = new Schema<IUser>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String },
    password: { type: String }, 
    role: { type: String, enum: ['student', 'consult', 'software'], default: 'student' },
    provider: { type: String, enum: ['local', 'google'], default: 'local' },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>('User', userSchema);
