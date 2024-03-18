import { createPortal } from 'react-dom';
import "./popup.scss"

type PopupProps = {
  message: string,
  category: 'error' | 'success',
}

const Popup: React.FC<PopupProps> = ({ message }) => {
  const portalRoot = document.getElementById('root');
  return portalRoot ? createPortal(
    <div className="popup">{message}</div>,
    portalRoot
  ) : null;
};

export default Popup;