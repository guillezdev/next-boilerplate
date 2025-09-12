import {AppConfig} from "@/utils/AppConfig";
import {createNavigation} from "next-intl/navigation";
import {defineRouting} from "next-intl/routing";

export const routingFromAppConfig = {
	locales: AppConfig.locales,
	defaultLocale: AppConfig.defaultLocale,
	localePrefix: AppConfig.localePrefix,
};

export const intlRouting = defineRouting({
	...routingFromAppConfig,
});

// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, redirect, usePathname, useRouter, getPathname} = createNavigation(intlRouting);
