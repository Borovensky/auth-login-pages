import { FormEvent, useState } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as GoogleLogo } from "../assets/google.svg";
import { ReactComponent as GitHubLogo } from "../assets/github.svg";
import Headline from "../components/headline/headline";
import Button from "../components/button/button";
import Divider from "../components/divider/divider";
import Input from "../components/input/input";
import Popup from "../components/popup/popup";
import classNames from "../utils/classnames";
import isEmail from "../utils/isEmail";

const Login: React.FC = () => {
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [showPopup, setShowPopup] = useState(false);

	const handleSubmit = async (event: FormEvent<HTMLFormElement>): Promise<void> => {
		event.preventDefault()
		try {
			const response = await fetch('https://auth-qa.qencode.com/v1/auth/login', {
				method: "POST",
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify({ email, password }),
			})

			const data = await response.json();
			if (data.error === 1) {
				setError(String(data.detail));
				setShowPopup(true);
				setTimeout(() => setShowPopup(false), 2000);
			}
		} catch (error) {
			// error handling 
		}
	}

	return (
		<div className="central-container">
			{showPopup && <Popup message={error} category="error" />}
			<Headline text="Log in to your account" />

			<div className="row-container">
				<Button onClick={() => null}>
					<span>
						<GoogleLogo style={{ paddingRight: '10px' }} />
						Google
					</span>
				</Button>
				<Button onClick={() => null}>
					<span>
						<GitHubLogo style={{ paddingRight: '10px' }} />
						GitHub
					</span>
				</Button>
			</div>

			<Divider text="OR" />

			<form className="form-container" onSubmit={handleSubmit}>
				<Input
					id="email"
					type="email"
					placeholder="Work email"
					value={email}
					onChange={value => setEmail(value)}
				/>
				<div className={
					classNames(
						"hidden-field",
						{ "hidden-field--visible": isEmail(email) }
					)
				}>
					<Input
						id="password"
						type="password"
						placeholder="Password"
						value={password}
						onChange={value => setPassword(value)}
					/>
					<div className="small-text flex-end margin-bottom">
						<Link to="/forgot-password">Forgot your password?</Link>
					</div>
				</div>
				<Button
					submit
					primary
					disabled={email.length === 0 || password.length === 0}
				>
					<p>Log in to Qencode</p>
				</Button>
			</form>

			<p className="small-text">Is your company new to Qencode? <Link to=''>Sign up</Link></p>
		</div>
	);
}

export default Login;