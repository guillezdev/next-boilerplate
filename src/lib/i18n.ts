import {getRequestConfig, type RequestConfig} from "next-intl/server";
import {notFound} from "next/navigation";
import {AppConfig} from "@/utils/AppConfig";

export default getRequestConfig(async ({requestLocale}) => {
	const locale = await requestLocale;

	if (!locale || !AppConfig.locales.includes(locale)) {
		notFound();
	}

	const config: RequestConfig = {
		locale,
		messages: (await import(`@/locales/${locale}.json`)).default,
	};

	return config;
});
