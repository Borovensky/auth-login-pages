import { FC } from 'react';
import './headline.scss';

type HeadlineProps = {
	text: string;
}

const Headline: FC<HeadlineProps> = ({ text }) => (
	<h2 className="headline">{text}</h2>
);

export default Headline;