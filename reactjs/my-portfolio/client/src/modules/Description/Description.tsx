interface DescriptionProps {
	children: React.ReactNode;
	className?: string;
}

const Description = ({ children, className = '' }: DescriptionProps) => {
	return <div className={`mt-20 ${className}`}>{children}</div>;
};

export default Description;
