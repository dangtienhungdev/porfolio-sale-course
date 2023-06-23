interface HeadingMetaProps {
	heading: string;
	className?: string;
}
const HeadingMeta = ({ heading, className = '' }: HeadingMetaProps) => {
	return (
		<h4
			className={`text-sm tracking-widest text-gray-400 uppercase transition-all duration-500 ${className}`}
		>
			{heading}
		</h4>
	);
};

export default HeadingMeta;
