export type IName = {
	first: string;
	last: string;
};
export type IPhoneInputScreenProps = {
	pageState: string;
	setpageState: (pageState: string) => void;
	phoneNumber: string;
	setphoneNumber: (phoneNumber: string) => void;
};
export type IEmailInputScreenProps = {
	pageState: string;
	setpageState: (pageState: string) => void;
};
export type INameInputScreenProps = {
	pageState: string;
	setpageState: (pageState: string) => void;
	setname: (obj: IName) => void;
	name: IName;
};
export type IOtpInputScreenProps = {
	pageState: string;
	setpageState: (pageState: string) => void;
	phoneNumber: string;
};
export type IOTP = {
  [otp1: string]: string;
  [otp2: string]: string;
  [otp3: string]: string;
  [otp4: string]: string;
};
export type IPasswordInputScreenProps = {
	pageState: string;
	setpageState: (pageState: string) => void;
};
export type IWelcomeScreenProps = {
	setpageState: (pageState: string) => void;
	name: IName;
};
