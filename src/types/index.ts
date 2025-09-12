import {type AbstractIntlMessages} from "next-intl";
import {type LocalePrefix} from "next-intl/routing";
import {SVGProps} from "react";

// Here we can write global types that can be used in the whole project

export type IconProps = SVGProps<SVGSVGElement>;

export type LayoutProps = Readonly<{
	children: React.ReactNode;
	params: {locale: string; messages: AbstractIntlMessages};
}>;

export type AppPageProps<T = {}> = {
	params: Promise<
		{
			locale: string;
		} & T
	>;
};

export type APP_ROUTES_TYPE = {name: string; href: string};

export type APP_CONFIG_TYPE = {
	appName: string;
	description?: string;
	creator?: string;
	creatorPhone?: string;
	creatorEmail?: string;
	creatorWebsite?: string;
	creatorAddress?: string;
	creatorCity?: string;
	creatorState?: string;
	creatorZip?: string;
	creatorCountry?: string;
	creatorSocial?: {
		facebook?: string;
		twitter?: string;
		linkedin?: string;
		instagram?: string;
	};

	// Locale types
	locales: string[];
	localePrefix: LocalePrefix;
	defaultLocale: string;
};

export type TranslatorOptions = {
	locale: string;
	namespace?: string;
};
