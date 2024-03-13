import type { Metadata } from "next";
import { Rubik } from "next/font/google";
import "./globals.scss";

const rubik = Rubik({ subsets: ["cyrillic"] });

export const metadata: Metadata = {
	title: "Презентация",
	description: "Презентация для friendly.pro",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={rubik.className}>{children}</body>
		</html>
	);
}
