import { ICommonBody } from "./Common.interface";

export interface IReissueTokenBody extends ICommonBody {
  refresh_token: string;
}

export interface IReissueTokenKakaoResponse {
  token_type: string;
  access_token: string;
  id_token: string;
  expires_in: number;
  refresh_token: string;
  refresh_token_expires_in: string;
}
