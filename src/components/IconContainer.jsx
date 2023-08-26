export const IconContainer = ({ children, url }) => {
	return (
		<a
			className='inline-flex justify-center items-center w-10 h-10 text-center text-gray-200 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-400 dark:hover:text-gray-100 p-1 dark:hover:bg-gray-800'
			href={url}>
			{children}
		</a>
	);
};
