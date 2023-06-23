interface LayoutContainerProps {
	children: React.ReactNode;
	className?: string;
}

const LayoutContainer = ({
	children,
	className = '',
}: LayoutContainerProps) => {
	return (
		<section className={`min-h-screen bg-white ${className}`}>
			{children}
		</section>
	);
};

export default LayoutContainer;
