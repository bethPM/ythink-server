import { kakaoTokenCheck } from "../../API/oauth";
import { IConfig } from "../../controller/auth/interface/kakao/Common.interface";

const kakaoAuthChecker = async (token: string) => {
  try {
    const config: IConfig = {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    await kakaoTokenCheck(config);
  } catch (err: any) {
    console.log("kakao authChecker err", err);

    const status: string = err.status || err.response.status;
    const message: number = err.message;

    throw { status, message };
  }
};

export default kakaoAuthChecker;
