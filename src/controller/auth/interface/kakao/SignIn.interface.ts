import { ICommonBody } from "./Common.interface";

export interface ISignInBody extends ICommonBody {
  redirect_uri: string;
  code: string;
}

export interface ISignInKakaoResponse {
  token_type: string;
  access_token: string;
  id_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: number;
  scope: string;
}
