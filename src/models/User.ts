import mongoose, { Schema, Document, Model } from "mongoose";
import { IUser } from "./interface/User.interface";

const userSchema = new Schema<IUserDoc>(
  {
    authType: String,
    email: {
      type: String,
      uniqe: 1,
      required: true,
    },
    role: {
      type: Number,
      default: 0,
    },
    refreshToken: String,
  },
  {
    timestamps: true,
  }
);

interface IUserDoc extends IUser, Document {
  _id: string;
}

interface IUserModel extends Model<IUserDoc> {}

const User = mongoose.model<IUserDoc, IUserModel>("User", userSchema);

const saveUser = async (userInfo: Partial<IUser>): Promise<boolean> => {
  try {
    const user = new User(userInfo);

    await user.save();
    return true;
  } catch (err: any) {
    return err;
  }
};

const modifyUser = async (
  email: string,
  payload: Partial<IUser>
): Promise<void> => {
  try {
    const user = (await User.findOneAndUpdate(
      { email },
      { $set: { ...payload } }
    ).exec()) as IUserDoc;

    await user.save();
  } catch (err: any) {
    return err;
  }
};

const findUser = async (email: string): Promise<IUser | null> => {
  try {
    const user = await User.findOne({ email }).exec();

    return user;
  } catch (err: any) {
    return err;
  }
};

export { User, saveUser, findUser, modifyUser };
