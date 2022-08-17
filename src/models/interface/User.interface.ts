import { KAKAO } from "../../middleware/constant/auth.constant";

export interface IUser {
  _id: string;
  authType: typeof KAKAO;
  email: string;
  role: number;
  refreshToken: string;
}
