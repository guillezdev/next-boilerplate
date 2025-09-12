import {MetadataRoute} from "next";

import {APP_ROUTES} from "@/constants/routes";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
	const urls = APP_ROUTES.filter(route => !route.href.includes("#")).map(({href: url}) => ({
		url,
		lastModified: new Date(),
		alternates: {
			languages: {
				es: `${url.endsWith("/") ? url : `${url}/`}es`,
				en: `${url.endsWith("/") ? url : `${url}/`}en`,
			},
		},
	}));

	return urls;
}
