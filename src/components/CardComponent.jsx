const Title = ({ title }) => {
	return (
		<div className='text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200'>
			{title}
		</div>
	);
};
function Icons({ children }) {
	return (
		<div className='flex gap-3 justify-center items-center flex-wrap'>
			{children}
		</div>
	);
}

function Description({ children }) {
	return <p className=' text-gray-200 mb-5'>{children}</p>;
}
const CardComponent = ({
	urlImg,
	title,
	children,
	direction,
	setIsModalOpen,
}) => {
	const className = 'bottom-full top-0 top-full left-0 left-full';
	const options = {
		top: {
			from: 'top-full',
			to: 'top-0',
		},
		bottom: {
			to: 'top-0',
			from: 'top-full',
		},
		left: {
			from: 'left-full',
			to: 'left-0',
		},
		right: {
			from: 'left-0',
			to: 'left-full',
		},
	};
	return (
		<button
			onClick={() => setIsModalOpen((prev) => !prev)}
			className='group relative block rounded-xl overflow-hidden h-full'>
			<div className='rounded-xl overflow-hidden h-full'>
				<img
					className='group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl h-full w-full object-cover'
					src={urlImg}
					alt='Imagen de presentación de un proyecto de programación'
				/>
			</div>
			<div className='absolute bottom-0 left-0 right-0 p-2 sm:p-4'>
				<Title title={title} />
			</div>
			<div
				className={`group-hover:top-0 absolute top-full bg-gray-800/80 rounded-lg p-4 transition-all lg:m-4 m-4  ease-in-out delay-75 duration-200   backdrop-blur`}>
				{children}
			</div>
		</button>
	);
};
CardComponent.Icons = Icons;
CardComponent.Description = Description;
export default CardComponent;
