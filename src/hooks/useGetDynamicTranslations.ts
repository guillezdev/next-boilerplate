import {createTranslator} from "next-intl";
import {TranslatorOptions} from "@/types";

/**
 * Async function to get translations from dynamic components
 * @param config
 * @returns translator.rich() function
 */

export default async function useGetDynamicTranslations(config: TranslatorOptions) {
	const {locale, namespace} = config;
	const messagesModule = await import(`../locales/${locale}.json`);

	const translator = createTranslator({
		locale,
		messages: messagesModule.default,
		namespace,
	});

	return translator.rich;
}
