import { IUser } from "./User.interface";

export interface IPost {
  author: IUser;
  date: number;
  title: string;
  description: string;
  bookMark: boolean;
  src: {
    dataType: string;
    url: string;
  };
  weatherInfo: {
    temperature: number;
    weather: string;
  };
  theme: string;
}
