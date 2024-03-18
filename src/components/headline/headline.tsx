import './headline.scss';

type HeadlineProps = {
	text: string;
}

const Headline: React.FC<HeadlineProps> = ({ text }) => (
	<h2 className="headline">{text}</h2>
);

export default Headline;