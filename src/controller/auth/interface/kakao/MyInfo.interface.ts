export interface IMyInfo {
  email: string;
  username: string;
  role: number;
}

export interface IMyInfoKakaoResponse {
  id: number;
  has_signed_up: boolean;
  connected_at: Date;
  synched_at: Date;
  properties: IProperties;
  kakao_account: IKakaoAccount;
}

interface IProperties {
  nickname: string;
  profile_image: string;
  thumbnail_image: string;
}

interface IKakaoAccount {
  profile_needs_agreement: boolean;
  profile_nickname_needs_agreement: boolean;
  profile_image_needs_agreement: boolean;
  profile: IProfile;
  name_needs_agreement: boolean;
  name: string;
  email_needs_agreement: boolean;
  is_email_valid: boolean;
  is_email_verified: boolean;
  email: string;
  age_range_needs_agreement: boolean;
  age_range: string;
  birthyear_needs_agreement: boolean;
  birthyear: string;
  birthday_needs_agreement: boolean;
  birthday: string;
  birthday_type: string;
  gender_needs_agreement: boolean;
  gender: string;
  phone_number_needs_agreement: boolean;
  phone_number: string;
  ci_needs_agreement: boolean;
  ci: string;
  ci_authenticated_at: Date;
}

interface IProfile {
  nickname: string;
  thumbnail_image_url: string;
  profile_image_url: string;
  is_default_image: boolean;
}
