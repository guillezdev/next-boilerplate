import {Metadata} from "next";

export const DEFAULT_APP_METADATA: Metadata = {
	alternates: {canonical: new URL(process.env.NEXT_PUBLIC_WEBITE_URL || "http://localhost:3000")},
	metadataBase: new URL(process.env.NEXT_PUBLIC_WEBITE_URL || "http://localhost:3000"),
	openGraph: {
		type: "website",
	},
	twitter: {
		card: "summary",
		creator: "CDM team",
		site: process.env.NEXT_PUBLIC_WEBITE_URL || "http://localhost:3000",
	},
};

export enum APP_THEMES {
	LIGHT = "light",
	DARK = "dark",
}
