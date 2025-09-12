import {MetadataRoute} from "next";

import {AppConfig} from "@/utils/AppConfig";

export default function robots(): MetadataRoute.Robots {
	return {
		rules: {
			userAgent: "*",
			allow: !AppConfig.creatorWebsite?.includes("dev") ? "/" : undefined,
			disallow: AppConfig.creatorWebsite?.includes("dev") ? "/" : undefined,
		},
		host: AppConfig.creatorWebsite,
		sitemap: `${AppConfig.creatorWebsite}/sitemap.xml`,
	};
}