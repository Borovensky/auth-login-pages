import { MouseEvent, ReactNode } from "react";
import classNames from "../../utils/classnames";
import "./button.scss";

type ButtonProps = {
	children: ReactNode,
	onClick?: () => void,
	submit?: boolean,
	primary?: boolean,
	disabled?: boolean,
};

const Button: React.FC<ButtonProps> = ({ children, onClick, submit, disabled, primary }) => {

	const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
		if (onClick) onClick();
	}

	return (
		<button
			className={
				classNames(
					"button",
					{ "button--primary": primary || false }
				)
			}
			onClick={onHandleClick}
			disabled={disabled}
			type={submit ? "submit" : "button"}
		>
			{children}
		</button>
	)
};

export default Button;