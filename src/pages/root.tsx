import { useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { ReactComponent as QencodeLogo } from '../assets/logo.svg';
import Popup from "../components/popup/popup";
import '../stylesheets/root.scss';

const Root: React.FC = () => {
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const auth = async () => {
    try {
      const response = await fetch('https://auth-qa.qencode.com/v1/auth/access-token', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ "access_id": "string" }),
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

  useEffect(() => {
    auth();
    navigate('/login');
  }, []);

  return (
    <div className="app-container centered">
      {showPopup && <Popup message={error} category="error" />}
      <QencodeLogo className="main-logo" />
      <Outlet />
    </div>
  );
}

export default Root;