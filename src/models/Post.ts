import mongoose, { Schema, Document, Model } from "mongoose";
import { IPost } from "./interface/Post.interface";
import { IUser } from "./interface/User.interface";

const postSchema = new Schema<IPostDoc>({
  author: {
    type: mongoose.Types.ObjectId,
    ref: "User",
  },
  date: Number,
  title: String,
  description: String,
  bookMark: Boolean,
  src: {
    dataType: String,
    dataUrl: String,
    youtubeUrl: String,
  },
  weatherInfo: {
    temperature: Number,
    weather: String,
  },
  theme: String,
});

interface IPostDoc extends IPost, Document {
  _id: string;
}

interface IPostModel extends Model<IPostDoc> {}

const Post = mongoose.model<IPostDoc, IPostModel>("Post", postSchema);

const postCreate = async (postInfo: IPost) => {
  const post = new Post(postInfo);

  try {
    await post.save();
  } catch (err) {
    throw err;
  }
};

const postsRead = async (email: string) => {
  try {
    return await Post.find({}).populate("author").find({ email }).exec();
  } catch (err) {
    throw err;
  }
};

const postRead = async (_id: string) => {
  try {
    return await Post.findOne({ _id }).exec();
  } catch (err) {
    throw err;
  }
};

const postUpdate = async (_id: string, payload: IPost) => {
  try {
    await Post.findOneAndUpdate({ _id }, { $set: { ...payload } }).exec();
  } catch (err) {
    throw err;
  }
};

const postDelete = async (_id: string) => {
  try {
    await Post.findByIdAndDelete({ _id });
  } catch (err) {
    throw err;
  }
};

export { Post, postsRead, postRead, postCreate, postUpdate, postDelete };
