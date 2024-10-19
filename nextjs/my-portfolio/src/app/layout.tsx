import "./globals.css";

import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ThemeProviderContext } from "@/contexts/theme-provider.context";
import NextTopLoader from "nextjs-toploader";
export const metadata: Metadata = {
	title: "DangTienHung",
	description:
		"Hello, My name is Hưng, and I am currently a Front-end Delevelop",
};

const poppins = Poppins({
	weight: ["200", "300", "400", "500", "600", "700"],
	subsets: ["latin-ext"],
});

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={poppins.className}>
				<NextTopLoader color="#2563EB" />
				<ThemeProviderContext>{children}</ThemeProviderContext>
			</body>
		</html>
	);
}
