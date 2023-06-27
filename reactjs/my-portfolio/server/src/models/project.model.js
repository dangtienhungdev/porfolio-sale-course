import mongoose from 'mongoose';
import mongoosePaginate from 'mongoose-paginate-v2';

const imageSchema = new mongoose.Schema({
  public_id: {
    type: String,
  },
  url: {
    type: String,
  },
});

const projectShema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    shortDescription: { type: String },
    description: { type: String },
    images: [imageSchema],
    category: { type: mongoose.Schema.Types.ObjectId, ref: 'Category', required: true },
    user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    linkDemo: { type: String },
    linkCode: { type: String, required: true },
  },
  { timestamps: true, versionKey: false }
);

projectShema.plugin(mongoosePaginate);

const Project = mongoose.model('Project', projectShema);

export default Project;
