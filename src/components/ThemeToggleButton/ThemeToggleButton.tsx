"use client";

import {useEffect, useState} from "react";
import {DayNight} from "@/assets/icons/DayNight";
import {APP_THEMES} from "@/constants/constants";

export default function ThemeToggleButton() {
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		const mustByDark = localStorage.theme === APP_THEMES.DARK;
		if (mustByDark) document.documentElement.classList.add(APP_THEMES.DARK);
		else document.documentElement.classList.remove(APP_THEMES.DARK);
		setIsDarkMode(mustByDark);
	}, []);

	const toggleTheme = () => {
		if (isDarkMode) document.documentElement.classList.remove(APP_THEMES.DARK);
		else document.documentElement.classList.add(APP_THEMES.DARK);
		localStorage.theme = isDarkMode ? APP_THEMES.LIGHT : APP_THEMES.DARK;
		setIsDarkMode(prev => !prev);
	};

	return (
		<button
			title="Toggle theme"
			onClick={toggleTheme}
			className="h-8 w-8 rounded-md text-gray-900 outline-none hover:bg-slate-300 hover:shadow dark:text-white hover:dark:bg-slate-500"
		>
			<DayNight />
		</button>
	);
}
