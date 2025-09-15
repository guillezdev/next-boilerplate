# Next.js SSG Boilerplate with Next-Intl

<p align="center">
  <img height="150" src="./src/assets/images/next-ssg-boilerplate-logo.png" alt="Next.js SSG Boilerplate with Next-Intl">
</p>

<p align="center">
  <strong>A production-ready boilerplate for building static sites with Next.js, featuring internationalization with `next-intl`.</strong>
</p>

<p align="center">
  <a href="https://github.com/guillezdev/next-boilerplate/stargazers">
    <img src="https://img.shields.io/github/stars/guillezdev/next-boilerplate" alt="GitHub stars">
  </a>
  <a href="https://github.com/guillezdev/next-boilerplate/network/members">
    <img src="https://img.shields.io/github/forks/guillezdev/next-boilerplate" alt="GitHub forks">
  </a>
</p>

---

This boilerplate is designed to provide a solid foundation for building fast, scalable, and SEO-friendly static websites with Next.js. It comes pre-configured with a range of modern tools and features to enhance your development experience.

## Features

-   🚀 **Next.js 15:** The latest version of the popular React framework, with support for the App Router.
-   🌍 **Internationalization (i18n):** Pre-configured with `next-intl` for easy multi-language support.
-   🎨 **Tailwind CSS 3:** A utility-first CSS framework for rapid UI development.
-   🔒 **TypeScript:** Static typing for improved code quality and maintainability.
-   ✨ **Code Quality:** Includes ESLint and Prettier for consistent code formatting and style.
-   🗺️ **SEO Optimized:** Automatic generation of `sitemap.xml` and `robots.txt`.
-   💡 **Absolute Imports:** Use the `@` prefix for cleaner import paths.
-   📦 **PNPM:** A fast and efficient package manager.

### Environment variables

-   `NEXT_PUBLIC_WEBITE_URL` - Complete url of the website (ex. https://google.com), this variable is necessary for app sitemap generation.

🌟 **_NOTE_**: 👀You can add environment variables types in `src/types/env.ts`. In this way, you make your code easier to understand and maintain.

## Getting Started

### Prerequisites

-   Node.js 19+
-   pnpm

### Installation

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/guillezdev/next-boilerplate.git
    ```

2.  **Navigate to the project directory:**

    ```bash
    cd next-boilerplate
    ```

3.  **Install the dependencies:**

    ```bash
    pnpm install
    ```

4.  **Run the development server:**

    ```bash
    pnpm dev
    ```

The application will be available at `http://localhost:3000`.

## Available Scripts

-   `pnpm dev`: Starts the development server.
-   `pnpm build`: Builds the application for production.
-   `pnpm start`: Starts the production server.
-   `pnpm lint`: Lints the codebase for errors.
-   `pnpm format:check`: Checks for formatting issues.
-   `pnpm format:fix`: Fixes formatting issues.

## Internationalization (i18n)

This boilerplate uses `next-intl` for internationalization. The configuration is located in the `src/lib/i18n.ts` file, and the language files are in the `src/locales` directory.

### Adding a new language

1.  **Create a new JSON file** in the `src/locales` directory with the language code as the filename (e.g., `fr.json`).
2.  **Add the new language** to the `locales` array in `src/utils/AppConfig.ts`.
3.  **Update the `middleware.ts`** file to include the new language in the `locales` array.

### Using translations in your components

You can use the `useTranslations` hook to access the translations in your components.

```tsx
import { useTranslations } from "next-intl";

export default function MyComponent() {
  const t = useTranslations("MyComponent");

  return <h1>{t("title")}</h1>;
}
```

For more information, please refer to the [`next-intl` documentation](https://next-intl-docs.vercel.app/).

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

-   **`src/utils/AppConfig.ts`**: Basic website configuration.
-   **`public/favicon.ico`**: Website favicon.
-   **`src/layouts/BaseLayout.tsx`**: Default layout for pages.
-   **`tailwind.config.ts`**: Tailwind CSS theme customization.
-   **`.eslintrc.json`**: ESLint configuration.
-   **`.prettierrc`**: Prettier configuration.


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

## Deployment

This boilerplate is ready to be deployed to any static hosting provider, such as Vercel, Netlify, or GitHub Pages.

---

<p align="center">
  Made with ❤️ by <a href="https://github.com/guillezdev">Guillezdev</a>.
</p>
<p align="center">
  Happy coding! 🧑‍💻
</p>
