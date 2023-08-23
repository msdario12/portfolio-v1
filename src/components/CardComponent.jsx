const Title = ({ title }) => {
	return (
		<div className='text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200'>
			{title}
		</div>
	);
};
function Icons({ children }) {
	return (
		<div className='flex gap-3 justify-center items-center'>{children}</div>
	);
}

function Description({ children }) {
	return <p className=' text-gray-200 mb-5'>{children}</p>;
}
const CardComponent = ({ urlImg, title, children }) => {
	return (
		<a
			className='group relative block rounded-xl overflow-hidden h-full'
			href='#'>
			<div className='aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden h-full'>
				<img
					className='group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl h-full w-full object-cover'
					src={urlImg}
					alt='Imagen de presentación de un proyecto de programación'
				/>
			</div>
			<div className='absolute bottom-0 left-0 right-0 p-2 sm:p-4'>
				<Title title={title} />
			</div>
			<div className='group-hover:top-0 absolute top-full bg-gray-800/80  rounded-lg p-4 transition-all  ease-in-out delay-75 duration-200 w-full  backdrop-blur'>
				{children}
			</div>
		</a>
	);
};
CardComponent.Icons = Icons;
CardComponent.Description = Description;
export default CardComponent;
