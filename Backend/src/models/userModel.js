import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true, 
    trim: true,
    lowercase: true, 
    match: [/\S+@\S+\.\S+/, 'Please use a valid email address'], 
  },
  password: {
    type: String,
    required: true,
    minlength: 8, 
    select: false, 
  },
});

const userModel = mongoose.model('User', userSchema);

export default userModel;
