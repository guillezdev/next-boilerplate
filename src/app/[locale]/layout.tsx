import "@/styles/globals.css";

import {Metadata} from "next";
import {NextIntlClientProvider} from "next-intl";
import {getMessages, getTranslations, setRequestLocale} from "next-intl/server";

import {DEFAULT_APP_METADATA} from "@/constants/constants";
import BaseLayout from "@/layouts/BaseLayout";
import {routingFromAppConfig} from "@/lib/i18nNavigation";
import {openSans} from "@/styles/fonts/fonts";
import {LayoutProps} from "@/types";

export async function generateMetadata(props: {params: Promise<{locale: string}>}): Promise<Metadata> {
	const params = await props.params;
	const t = await getTranslations({locale: params.locale});
	return {
		...DEFAULT_APP_METADATA,
		title: t("title"),
		description: t("og:description"),
		openGraph: {
			...DEFAULT_APP_METADATA.openGraph,
			title: t("title"),
			description: t("og:description"),
			images: "/opengraph-image.png",
		},
	};
}

export function generateStaticParams() {
	return routingFromAppConfig.locales.map(locale => ({locale}));
}

export default async function MainLayout(props: LayoutProps) {
	const params = await props.params;
	setRequestLocale(params.locale);
	const {children} = props;
	const messages = await getMessages({locale: params.locale});

	return (
		<html lang={params.locale}>
			<body className={openSans.className}>
				<NextIntlClientProvider locale={params.locale} messages={messages}>
					<BaseLayout>{children}</BaseLayout>
				</NextIntlClientProvider>
			</body>
		</html>
	);
}
