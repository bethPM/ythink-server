import axios, { AxiosResponse } from "axios";
import { ICheckTokenKakaoResponse } from "../controller/auth/interface/kakao/CheckToken.interface";
import { IConfig } from "../controller/auth/interface/kakao/Common.interface";
import { ILogoutKakaoResponse } from "../controller/auth/interface/kakao/Logout.interface";
import { IMyInfoKakaoResponse } from "../controller/auth/interface/kakao/MyInfo.interface";
import {
  IReissueTokenBody,
  IReissueTokenKakaoResponse,
} from "../controller/auth/interface/kakao/ReissueToken.interface";
import {
  ISignInBody,
  ISignInKakaoResponse,
} from "../controller/auth/interface/kakao/SignIn.interface";

// KAKAO
const kakaoLogin = (
  body: ISignInBody
): Promise<AxiosResponse<ISignInKakaoResponse>> => {
  return axios.post(
    "https://kauth.kakao.com/oauth/token",
    queryStringBody(body)
  );
};

const kakaoTokenCheck = (
  config: IConfig
): Promise<AxiosResponse<ICheckTokenKakaoResponse>> => {
  return axios.get("https://kapi.kakao.com/v1/user/access_token_info", config);
};

const kakaoMyInfo = (
  config: IConfig
): Promise<AxiosResponse<IMyInfoKakaoResponse>> => {
  return axios.post("https://kapi.kakao.com/v2/user/me", {}, config);
};

const kakaoReissueToken = (
  body: IReissueTokenBody
): Promise<AxiosResponse<IReissueTokenKakaoResponse>> => {
  return axios.post(
    "https://kauth.kakao.com/oauth/token",
    queryStringBody(body)
  );
};

const kakaoLogout = (
  config: IConfig
): Promise<AxiosResponse<ILogoutKakaoResponse>> => {
  return axios.post(`https://kapi.kakao.com/v1/user/logout`, {}, config);
};

export {
  kakaoLogin,
  kakaoTokenCheck,
  kakaoReissueToken,
  kakaoMyInfo,
  kakaoLogout,
};

const queryStringBody = (body: any) => {
  return Object.keys(body)
    .map((k) => encodeURIComponent(k) + "=" + encodeURI(body[k]))
    .join("&");
};
