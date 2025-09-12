import {ReactNode} from "react";

// The root layout is responsible for the <html> and <body> tags.
// This is the same for all locales, so we don't need to worry about i18n here.
export default function RootLayout({children}: {children: ReactNode}) {
	return children;
}
