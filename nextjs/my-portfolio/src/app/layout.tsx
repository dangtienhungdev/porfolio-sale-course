import './globals.css';

import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';

export const metadata: Metadata = {
	title: 'DangTienHung',
	description:
		'Hello, My name is Hưng, and I am currently a Front-end Delevelop',
};

const poppins = Poppins({
	weight: ['200', '300', '400', '500', '600', '700'],
	subsets: ['latin-ext'],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={poppins.className}>{children}</body>
		</html>
	);
}
