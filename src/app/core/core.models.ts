export interface Error {
    id: string;
    links: any;
    status: string;
    code: string;
    title: string;
    detail: string;
    source: {
      pointer: string;
      parameter: string;
    };
    meta: any;
    data: ErrorData;
  }
  
  export interface ErrorData {
    pattern: any;
    value: string;
    key: string;
    label: string;
  }

  export interface AuthInfo {
    accessToken: string;
    email: string;
    expiresIn: number;
    uuid: string;
  }

  export interface UserModel{
    dni: string;
    first_name: string;
    last_name: string;
    email: string;
    account_activated: Date;
    id_rol: number;
    id_dpt: number;
    account_created: Date;
    verification_code: string;
    password: string;
  }

  export interface EventModel{
    name: string;
    type: string;
    id_event: number;
    date: Date;
  }
  