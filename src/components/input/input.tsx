import { useState } from "react"
import { ReactComponent as EyeIcon } from "../../assets/eye.svg";
import classNames from "../../utils/classnames";
import "./input.scss"

type InputProps = {
  id: string,
  type: string,
  placeholder: string,
  value: string,
  label?: string,
  onChange: (value: string) => void,
}

const Input: React.FC<InputProps> = ({ id, type, placeholder, value, label, onChange }) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  return (
    <>
      {label ? <label className="input-label" htmlFor={id}>{label}</label> : null}
      <input
        className="input-field"
        id={id}
        type={isPasswordVisible && type === 'password' ? 'text' : type}
        placeholder={placeholder}
        value={value}
        onChange={e => onChange(e.target.value)}
        minLength={type === 'password' ? 8 : undefined}
        maxLength={type === 'password' ? 20 : undefined}
        pattern={type === 'password' ? ".{8,}" : undefined}
        title={type === 'password' ? 'Password should contain at least 8 characters' : undefined}
      />
      {type === "password"
        ? (
          <EyeIcon
            className={
              classNames(
                "eye-icon",
                { "eye-icon--active": isPasswordVisible }
              )
            }
            onClick={() => setPasswordVisible(!isPasswordVisible)}
            style={label ? { top: '36px' } : {}}
          />
        )
        : null
      }
    </>
  );
}

export default Input;