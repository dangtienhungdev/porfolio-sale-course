import mongoose from 'mongoose';

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  age: {
    type: Number,
  },
});

const Author = mongoose.model('Author', AuthorSchema);
export default Author;
