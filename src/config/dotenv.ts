import dotenv from "dotenv";

dotenv.config();

const mongoDBConfig = {
  uri: process.env.MONGODB_URI as string,
};

const kakaoConfig = {
  clientId: process.env.KAKAO_CLIENT_ID as string,
  secret: process.env.KAKAO_SECRET as string,
  redirectUri: process.env.KAKAO_REDIRECT_URI as string,
};

const weatherConfig = {
  apiKey: process.env.WEATHER_API_KEY as string,
};

export { mongoDBConfig, kakaoConfig, weatherConfig };
