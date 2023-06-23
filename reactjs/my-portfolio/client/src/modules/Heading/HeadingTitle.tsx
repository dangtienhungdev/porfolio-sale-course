interface HeadingTitleProps {
	className?: string;
	heading: string;
}

const HeadingTitle = ({ className = '', heading }: HeadingTitleProps) => {
	return (
		<h2
			className={`mt-8 text-3xl font-playfair tracking-widest font-medium uppercase transition-all duration-700 ${className}`}
		>
			{heading}
		</h2>
	);
};

export default HeadingTitle;
