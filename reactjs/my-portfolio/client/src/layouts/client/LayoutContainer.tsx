interface LayoutContainerProps {
	children: React.ReactNode;
	className?: string;
}

const LayoutContainer = ({ children, className }: LayoutContainerProps) => {
	return (
		<section style={{ height: '100vh' }} className={className}>
			{children}
		</section>
	);
};

export default LayoutContainer;
