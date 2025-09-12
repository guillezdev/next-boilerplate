# Starter for Next.js 15+, Tailwind CSS 3+ and TypeScript.

<p align="center">
  <img height="150" src="./src/assets/images/next-ssg-boilerplate-logo.png" alt="Next js starter banner">
</p>

🚀 Starter for Next.js with App Router support, Tailwind CSS, and TypeScript ⚡️ Prioritizing developer experience first: Next.js, TypeScript, ESLint, Prettier, PostCSS, Tailwind CSS.

Clone this project and use it! ⚡️

### Features

Developer experience first, extremely flexible code structure and only keep what you need:

-   ⚡ [Next.js](https://nextjs.org) with App Router support
-   🔥 Type checking [TypeScript](https://www.typescriptlang.org)
-   💎 Integrate with [Tailwind CSS](https://tailwindcss.com)
-   ✅ Strict Mode for TypeScript and React 18
-   📏 Linter with [ESLint](https://eslint.org)
-   💖 Code Formatter with [Prettier](https://prettier.io)
-   💡 Absolute Imports using `@` prefix
-   🗺️ Sitemap.xml and robots.txt
-   🌐 Multi-language (i18n) with [next-intl](https://next-intl-docs.vercel.app/)

Built-in feature from Next.js:

-   ☕ Minify HTML & CSS
-   💨 Live reload
-   ✅ Cache busting

### Philosophy

-   Easy to customize
-   Minimal code
-   SEO-friendly

### Requirements

-   Node.js 19+ and pnpm

## Getting started

### Steps to run this starter project:

-   Clone the proyect repo from Github
-   Open the project folder
-   Open the terminal and run `pnpm` to install app dependencies
-   Run `pnpm dev` and open (by default) `localhost:3000`

🎊🎊🎊 And that is it! 🎊🎊🎊

### Environment variables

-   `NEXT_PUBLIC_WEBITE_URL` - Complete url of the website (ex. https://google.com), this variable is necessary for app sitemap generation.

🌟 **_NOTE_**: 👀You can add environment variables types in `src/types/env.ts`. In this way, you make your code easier to understand and maintain.

### Yarn Scripts

The following utility Yarn scripts are available:

-   `format:check`: Gets a list of all unformatted code in the project.
-   `format:fix`: Fixes the format issues of all the unformatted files.
-   `prettier`: Runs `prettier` and below functionality can be added with `--arg`.
-   `lint`: Runs configured linter.

⚠️ **_NOTE_**: 🚨It is highly recommended to run `yarn format:check` and `yarn format:fix` before committing as this would prevent uploading changes with unformatted code.

### Project structure

```shell
.
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   └── assets                      # Assets folder
│       │── icons                   # JSX Icons folder
│       └── images                  # Images folder
│   ├── components                  # React components
│   └── constants                   # App constants like routes and anothers global constants
│       ├── constants               # App global constants
│       └── routes                  # App routes folder
│   ├── hooks                       # Hooks to handle state and client components logic
│   ├── layouts                     # Templates folder (base loyouts and nested layouts)
│   ├── lib		                    # Custom libraries config (i18n etc...)
│   ├── locales		                # Available locales messages in json format
│   ├── providers                   # Providers folder
│   ├── styles                      # Styles folder
│   ├── types                       # Type definitions
│   └── utils                       # App utils functionalities (AppConfig...)
├── next-config-sitemap.js          # Generator sitemap config
├── tailwind.config.js              # Tailwind CSS configuration
├── tsconfig.json                   # TypeScript configuration
└── README.md                       # README file
```

## Customization

You can easily configure Next js Starter by making a search in the whole project with `FIXME:` for making quick customization. Here is some of the most important files to customize:

-   `utils/AppConfig`: your website base config
-   `public/favicon.ico`: your website favicon.
-   `src/layouts/BaseTemplate.tsx`: default base layout
-   `next.config.mjs`: Next.js configuration
-   `tailwind.config.js`: default tailwind theme
-   `.eslintrc.json`: linter config
-   `.prettierrc`: code formatter config

### Theme

In the `styles` directory, you will find the `globals.css` file that contains the basic configuration to start customizing the theme of your application. Below is its structure:

-   CSS Variables in `:root`:
-   CSS variables are defined for foreground and background colors in light mode.
-   These variables can be reused throughout the CSS to maintain color consistency.

```css
:root {
	/* Define CSS variables for colors in light mode */
	--foreground-rgb: 0, 0, 0; /* Foreground color (black) */
	--background-start-rgb: 214, 219, 220; /* Initial background color (light gray) */
	--background-end-rgb: 255, 255, 255; /* Final background color (white) */
}
```

-   Utility Layer `@layer utilities:`
    -   Defines a custom utility class `.text-balance`.
    -   The `.text-balance` class applies the `text-wrap` property with the value `balance`, which helps balance text justification.

### App Config

In the `utils` file, you will find the `AppConfig.ts` file. This file exports a constant object `AppConfig` which is typed as `APP_CONFIG_TYPE`. The `AppConfig` object contains several key-value pairs that store metadata about the application and its creator. Here is a breakdown of what each key in the configuration object indicates:

**_Base config_**

-   `appName` - App name.
-   `description` - App description
-   `creator` - Owner Name
-   `creatorPhone` - Owner Phone Number
-   `creatorEmail` - Owner Email Address
-   `creatorWebsite` - Owner Website URL
-   `creatorAddress` - Owner Address
-   `creatorCity` - Owner City
-   `creatorState` - Owner State
-   `creatorZip` - Owner Zip Code
-   `creatorCountry` - Owner Country
-   `creatorSocial` - Owner Social Media URLs
-   `facebook` - Owner Facebook URL
-   `twitter` - Owner Twitter URL
-   `linkedin` - Owner LinkedIn URL
-   `instagram` - Owner Instagram URL

**_Locale config_**

-   `locales`: List of available locales ( ex. ['es', 'en', 'fr'] )
-   `localePrefix`: Config to handle show locale prefix on the url. `always` - `as-needed` - `never`
-   `defaultLocale`: Default locale. By default is `es`;

### Translation (i18n) setup

For translation, the project uses `next-intl`. The project has two preset configurations in the locales directory in `json` format corresponding to the Spanish and English languages. As a developer, you can modify both files with the corresponding texts. In the components, you should use the `useTranslations` hook and pass the key of the text you want to translate as a parameter. Example:

```typescript
import {useTranslations} from "next-intl";

export default function Home() {
	const t = useTranslations();
	return (
		<section>
			<h1>{t("title")}</h1>
		</section>
	);
}
```

To add new translations, follow these steps:

1. Add a new `json` file inside the `locales` folder. Ex. `fr.json`
2. In the `AppConfig` file within `utils`, add the prefix of the new translation to the `locales` attribute and determine if it will be the default.
3. In the `middleware` configuration object, add the prefix of the new translation to the regular expression.

-   Example with a dynamic page:

```typescript
import {unstable_setRequestLocale} from "next-intl/server";
import useGetDynamicTranslations from "@/hooks/useGetDynamicTranslations";

interface HomeProps {
	params: {locale: string};
}

export default async function Home({params}: HomeProps) {
	unstable_setRequestLocale(params.locale);
	const t = await useGetDynamicTranslations({locale: params.locale});

	return (
		<section>
			<h1>{t("title")}</h1>
		</section>
	);
}
```

-   Example with a static page:

```typescript
import {useTranslations} from "next-intl";
import {unstable_setRequestLocale} from "next-intl/server";

interface HomeProps {
	params: {locale: string};
}

export default function Home({params}: HomeProps) {
	unstable_setRequestLocale(params.locale);
	const t = useTranslations();

	return (
		<section>
			<h1>{t("title")}</h1>
		</section>
	);
}
```

ℹ️ **_INFO_** To navigate between pages, consider using the `Link` component which is imported from:

```typescript
import {Link} from "@/lib/i18nNavigation";
```

This component extends the configuration of the native Next.js Link component and automatically applies the translation prefix to the URL.

🎉 That's it! To use your new translation, go to your component and follow the steps on how to use the translation in your components. For more information, visit [next-intl](https://next-intl-docs.vercel.app/) 🚀

### Metadata Configuration

This application uses the new [Metadata API](https://nextjs.org/docs/app/building-your-application/optimizing/metadata) from Next.js to manage metadata. Here's how to configure it:

### Static Global Metadata

Global metadata is configured in the `layout.tsx` file statically. This metadata applies to all pages of the application. If you need specific metatags for certain pages, you can define them directly in the files of those pages and extend or override the default values. For the metadata images, you can use an image file to set a route segment's shared image by placing an or image file in the segment `opengraph-image` `twitter-image`.

### Dynamic Metadata

For obtaining dynamic metadata, you can use the [generateMetadata](https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function) function from Next.js within a `page.tsx` file. Here's an example of how to obtain metadata dynamically:

```typescript
import type {Metadata, ResolvingMetadata} from "next";

type Props = {
	params: {id: string};
	searchParams: {[key: string]: string | string[] | undefined};
};

export async function generateMetadata({params, searchParams}: Props, parent: ResolvingMetadata): Promise<Metadata> {
	// read route params
	const id = params.id;

	// fetch data
	const product = await fetch(`https://.../${id}`).then(res => res.json());

	// optionally access and extend (rather than replace) parent metadata
	const previousImages = (await parent).openGraph?.images || [];

	return {
		title: product.title,
		openGraph: {
			images: ["/some-specific-page-image.jpg", ...previousImages],
		},
	};
}

export default function Page({params, searchParams}: Props) {}
```

---

### Made with ❤️ by Guillezdev. 🧑‍💻Happy coding!🧑‍💻 ☕
