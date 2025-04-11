

export interface ProfileType {
    id: number;
  name: string;
  address: string;
  phone_number: number;
  occupation: string;
  aadhaar_number: number;
  aadhaar_file: string;
  pan_number: string;
  pan_card_file: string;
  photo: string;
}
export interface ProfileListType {
    count: number;
    next: string | null;
    previous: string | null;
    results: ProfileType[];

}
