import React, { useState, ChangeEvent, useRef } from "react";
import { cn } from "@utils/cn";

const Login: React.FC = () => {
	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [emailError, setEmailError] = useState<string>("");
	const [passwordError, setPasswordError] = useState<string>("");
	const emailInputRef = useRef<HTMLInputElement>(null);
	const passwordInputRef = useRef<HTMLInputElement>(null);

	const handleSubmit = () => {
		if (!email || !validateEmail(email)) {
			setEmailError("Please enter a valid email address");
			if (emailInputRef.current) {
				emailInputRef.current.focus();
			}
			return;
		}

		if (!password || !validatePassword(password)) {
			setPasswordError("Password should be between 4 and 15 characters");
			if (passwordInputRef.current) {
				passwordInputRef.current.focus();
			}
			return;
		}

		// логика для отправки данных формы
	};

	const validateEmail = (email: string): boolean => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(email);
	};

	const validatePassword = (password: string): boolean => {
		return password.length >= 4 && password.length <= 15;
	};

	return (
		<div className={cn("w-full h-screen flex items-center justify-center")}>
			<form className={cn("w-full max-w-sm")}>
				<div className={cn("mb-4")}>
					<label className={cn("block text-gray-700 text-sm font-bold mb-2")} htmlFor='username'>
						Email
					</label>
					<input
						className={cn("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline", { "border-red-500": emailError })}
						id='username'
						type='text'
						placeholder='Enter email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						ref={emailInputRef}
					/>
					{emailError && <p className={cn("text-red-500 text-xs italic")}>{emailError}</p>}
				</div>
				<div className={cn("mb-6")}>
					<label className={cn("block text-gray-700 text-sm font-bold mb-2")} htmlFor='password'>
						Password
					</label>
					<input
						className={cn("shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline", { "border-red-500": passwordError })}
						id='password'
						type='password'
						placeholder='Enter password'
						value={password}
						onChange={(e) => setPassword(e.target.value)}
						ref={passwordInputRef}
					/>
					{passwordError && <p className={cn("text-red-500 text-xs italic")}>{passwordError}</p>}
				</div>
				<div className={cn("flex items-center justify-between")}>
					<button className={cn("bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline")} type='button' onClick={handleSubmit}>
						Sign In
					</button>
					<a className={cn("inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800")} href='#'>
						Forgot Password?
					</a>
				</div>
			</form>
		</div>
	);
};

export default Login;
