"use client";

import {type ChangeEventHandler} from "react";

import {usePathname, useRouter} from "@/lib/i18nNavigation";
import {AppConfig} from "@/utils/AppConfig";
import {useParams} from "next/navigation";

export default function LocaleSwitcher() {
	const router = useRouter();
	const pathname = usePathname();
	const params = useParams();

	const handleChange: ChangeEventHandler<HTMLSelectElement> = ({target}) => {
		router.replace(pathname, {locale: target.value});
	};

	return (
		<select
			disabled={AppConfig.locales.length <= 1}
			defaultValue={params.locale || AppConfig.defaultLocale}
			onChange={handleChange}
			className="block rounded-lg border border-gray-300 bg-gray-50 px-2.5 py-1 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
		>
			{AppConfig.locales.map(elt => (
				<option key={elt} value={elt}>
					{elt.toUpperCase()}
				</option>
			))}
		</select>
	);
}
