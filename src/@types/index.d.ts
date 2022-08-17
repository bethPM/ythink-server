import { IUser } from "../models/interface/user.interface";

declare global {
  namespace Express {
    interface Request {
      user: IUser;
    }
  }
}
