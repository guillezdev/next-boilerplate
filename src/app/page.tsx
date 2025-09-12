import {AppConfig} from "@/utils/AppConfig";
import {redirect} from "next/navigation";

export default function RootPage() {
	redirect(`/${AppConfig.defaultLocale}`);
}
