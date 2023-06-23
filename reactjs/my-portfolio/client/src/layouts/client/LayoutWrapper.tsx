interface LayoutWrapperProps {
	children: React.ReactNode;
	className?: string;
	name: string;
}

const LayoutWrapper = ({
	children,
	className = '',
	name,
}: LayoutWrapperProps) => {
	return (
		<section
			className={`${className} px-[4%] py-20 text-black h-full w-full`}
			id={name}
		>
			{children}
		</section>
	);
};

export default LayoutWrapper;
