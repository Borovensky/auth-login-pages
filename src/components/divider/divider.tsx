import { FC } from "react";
import "./divider.scss";

type DividerProps = {
	text?: string;
}

const Divider: FC<DividerProps> = ({ text }) => (
  <div className="divider">
    <span className="divider-line"></span>
    {text ? (
      <>
        <span className="divider-text">{text}</span>
        <span className="divider-line"></span>
      </>
    ) : (
      null
    )}

  </div>
);

export default Divider;