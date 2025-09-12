export default function BaseLayout(props: {children: React.ReactNode}) {
	return (
		<div className="flex min-h-screen w-full flex-col items-center justify-between bg-slate-100 px-10 pt-10 transition-colors duration-1000 dark:bg-slate-800">
			<main className="flex w-full flex-1">{props.children}</main>
		</div>
	);
}
