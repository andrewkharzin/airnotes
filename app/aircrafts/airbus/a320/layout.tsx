export default function BlogLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<section className="">
			<div className="flex flex-col items-center justify-center md:py-10">
				{children}
			</div>
		</section>
	);
}
