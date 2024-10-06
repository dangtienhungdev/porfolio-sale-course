'use client';

import { ThemeProvider } from 'next-themes';

export const ThemeProviderContext = ({
	children,
}: {
	children: React.ReactNode;
}) => {
	return (
		<ThemeProvider attribute="class" enableSystem>
			{children}
		</ThemeProvider>
	);
};
