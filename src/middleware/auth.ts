import { Request, Response, NextFunction } from "express";
import kakaoAuthChecker from "./func/kakao.authChecker.func";
import { KAKAO } from "./constant/auth.constant";
import { resFunc } from "../controller/common/ResFunc.common";
import { IConfig } from "../controller/auth/interface/kakao/Common.interface";
import { kakaoMyInfo } from "../API/oauth";
import { findUser } from "../models/User";
import { IUser } from "../models/interface/User.interface";

import kakaoController from "../controller/auth/kakao.controller";

export const authChecker = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  if (req.headers.authorization) {
    const authType: string = req.headers["auth-type"] as string;
    const token: string = req.headers.authorization.split("Bearer ")[1];
    const refreshToken = req.body.refresh_token;

    try {
      switch (authType) {
        case KAKAO: {
          await kakaoAuthChecker(token);
          break;
        }
        default: {
          throw new Error("Not Auth-Type!");
        }
      }
      const config: IConfig = {
        headers: {
          authorization: req.headers.authorization,
        },
      };
      const {
        data: {
          kakao_account: { email },
        },
      } = await kakaoMyInfo(config);
      const user = (await findUser(email)) as IUser;
      req.user = user;
      next();
    } catch (err: any) {
      const status: number = err.status;
      const message: string = err.message;

      if (refreshToken) {
        return kakaoController.reissueToken(req, res);
      }

      return resFunc({ res, err: { status, message } });
    }
  } else {
    return resFunc({ res, err: { status: 401, message: "Unauthorized" } });
  }
};
