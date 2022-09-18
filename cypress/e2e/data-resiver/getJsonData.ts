import UserData from "./usrerData";

export interface UserObject {
    name: string;
    address: string;
    latitude: number;
    longitude: number;
    maiden_name: string;
    birth_data: string;
    phone_h: string;
    phone_w: string;
    email_u: string;
    email_d: string;
    username: string;
    password: string;
    domain: string;
    useragent: string;
    ipv4: string;
    macaddress: string;
    plasticcard: string;
    cardexpir: string;
    bonus: number;
    company: string;
    color: string;
    uuid: string;
    height: number;
    weight: number;
    blood: string;
    eye: string;
    hair: string;
    pict: string;
    url: string;
    sport: string;
    ipv4_url: string;
    email_url: string;
    domain_url: string;
}

function splitName(userFullName: UserObject): Array<string> {
    return userFullName.name.split(" ");
}

function concatEmail(userFullName: UserObject): string {
    return userFullName.email_u + "@" + userFullName.email_d;
}

function concatPhone(userFullName: UserObject): string {
    return userFullName.phone_w + userFullName.phone_h;
}

 export function getData(requestData: string): UserData {
  const userObject : UserObject = JSON.parse(requestData);

  return new UserData(
    userObject.company,
    splitName(userObject)[0],
    splitName(userObject)[1],
    concatEmail(userObject),
    userObject.password,
    userObject.phone_h
  )

}
