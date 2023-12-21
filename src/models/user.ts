export type IUser = {
	_id: string;
	email: string;
	fullName: string;
	avatar: string;
	favourites: string[];
	role: string;
	isActivated: boolean;
	activationLink: string;
	token: string;
};
