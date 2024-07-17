export type FetchMethod =
  | 'GET'
  | 'POST'
  | 'PUT'
  | 'DELETE'
  | 'PATCH'
  | 'HEAD'
  | 'OPTIONS';

export type ResponseData =
  | { error: string; status: string }
  | { payload: { message: string } | any; status: number }
  | any;

export interface FeedPayload {
    id: string;
    name: string;
    date: string;
    time: string;
    image: string;
    location:string;
    latitude:string;
    longitude:string;

  }

  export interface form {
    countryCode: string;
    startDateTime: string;
    endDateTime: string; // Make this one year from current date
  }
