import {use} from "react";
import {setRequestLocale} from "next-intl/server";
import {useTranslations} from "next-intl";

import LocaleSwitcher from "@/components/LocaleSwitcher/LocaleSwitcher";
import ThemeToggleButton from "@/components/ThemeToggleButton/ThemeToggleButton";
import {AppPageProps} from "@/types";

export default function Home(props: AppPageProps) {
	const params = use(props.params);
	setRequestLocale(params.locale);
	const t = useTranslations();

	return (
		<section className="flex w-full items-center justify-center">
			<div className="max-w-sm rounded-lg border border-gray-200 bg-white p-10 shadow transition-colors duration-700 dark:border-gray-700 dark:bg-gray-800">
				<div className="mb-2 flex w-full items-center justify-between">
					<h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{t("title")}</h1>
				</div>
				<p className="mb-3 font-normal text-gray-700 dark:text-gray-400">{t("description")}</p>
				<div className="flex items-center justify-center gap-3">
					<ThemeToggleButton />
					<LocaleSwitcher />
				</div>
			</div>
		</section>
	);
}
