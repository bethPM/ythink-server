import { AxiosRequestHeaders } from "axios";

export interface ICommonBody {
  grant_type: "authorization_code" | "refresh_token";
  client_id: string;
  client_secret: string;
}

export interface IConfig {
  headers: AxiosRequestHeaders;
}
