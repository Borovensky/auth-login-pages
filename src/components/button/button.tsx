import { MouseEvent, ReactNode, FC } from "react";
import classNames from "../../utils/classnames";
import "./button.scss";

type ButtonProps = {
	children: ReactNode,
	onClick: () => void,
	submit?: boolean,
	primary?: boolean,
};

const Button: FC<ButtonProps> = ({ children, onClick, submit, primary }) => {
	
	const onHandleClick = (event: MouseEvent<HTMLButtonElement>) => {
		onClick();
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
			type={submit ? "submit" : "button"}
		>
			{children}
		</button>
	)
};

export default Button;