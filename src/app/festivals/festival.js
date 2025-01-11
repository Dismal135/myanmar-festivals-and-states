import mongoose from "mongoose";

const festivalSchema = new mongoose.Schema({
  name: String,
  date: String,
  about: String,
  url: String
});

const Festival = mongoose.models.Festival || mongoose.model("Festival", festivalSchema);

export default Festival;
