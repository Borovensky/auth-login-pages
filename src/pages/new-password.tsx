import { FormEvent, useState } from "react";
import Headline from "../components/headline/headline";
import Button from "../components/button/button";
import Input from "../components/input/input";

const NewPassword: React.FC = () => {
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (event: FormEvent<HTMLFormElement>): void => {
    // Reset Password api call...
  }

  return (
    <div className="central-container">
      <Headline text="Create new Password" />
      <form className="form-container" onSubmit={handleSubmit}>
        <div style={{ position: 'relative' }}>
          <Input
            id="new-password"
            label="Password"
            type="password"
            placeholder="Password"
            value={newPassword}
            onChange={value => setNewPassword(value)}
          />
        </div>
        <div style={{ position: 'relative' }}>
          <Input
            id="confirm-password"
            label="Confirm password"
            type="password"
            placeholder="Password"
            value={confirmPassword}
            onChange={value => setConfirmPassword(value)}
          />
        </div>
        <Button
          submit
          primary
        >
          <p>Reset Password</p>
        </Button>
      </form>
    </div>
  );
}

export default NewPassword;