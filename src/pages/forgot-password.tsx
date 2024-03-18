import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import Headline from "../components/headline/headline";
import Button from "../components/button/button";
import Input from "../components/input/input";
import Popup from "../components/popup/popup";

const ForgotPassword: React.FC = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [showPopup, setShowPopup] = useState(false);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()
		try {
			const response = await fetch('https://auth-qa.qencode.com/v1/auth/password-reset', {
				method: "POST",
				headers: {
          'Content-Type': 'application/json',
        },
				body: JSON.stringify({ email, redirect_url: "https://auth-qa.qencode.com/password-set" }),
			})

			const data = await response.json();
			if (data.error === 1) {
        setError(String(data.detail));
        setShowPopup(true);
        setTimeout(() => {
          setShowPopup(false)
          navigate("/new-password")
        }, 2000);
      }
		} catch (error) {
			// error handling 
		}
  }

  return (
    <div className="central-container">
      {showPopup && <Popup message={error} category="error" />}
      <Headline text="Forgot Password?" />
      <form className="form-container" onSubmit={handleSubmit}>
        <Input
          id="email"
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={value => setEmail(value)}
        />
				<Button
					onClick={() => null}
					submit
					primary
          disabled={email.length === 0}
				>
					<p>Send</p>
				</Button>
        <Button
          onClick={() => navigate("/login")}
        >
          <p>Cancel</p>
        </Button>
      </form>
    </div>
  );
}

export default ForgotPassword;