export const HomeTitle = ({ title, subtitle }) => {
	return (
		<div className="container mx-auto">
			<h2 className="text-5xl leading-tight font-bold  md:leading-tight lg:text-6xl lg:leading-tight bg-clip-text   ">
				{title}
			</h2>
			<p className="text-lg leading-5 text-gray-400">{subtitle}</p>
		</div>
	)
}
