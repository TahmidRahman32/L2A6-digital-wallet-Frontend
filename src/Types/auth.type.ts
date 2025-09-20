export interface ISendOtp {
   email: string;
}
export interface IVerifyOtp {
   email: string;
   otp: string;
}
export interface IPassword {
   email: string;
   password: string;
}
export interface IRegister {
   name: string;
   email: string;
   password: string;
}

export interface IRootResp<T> {
   statusCode: number;
   success: boolean;
   message: string;
   data: T;
}
