import {
	Envelope,
	Github,
	Google,
	Linkedin,
	Mailbox,
	Mailbox2,
} from 'react-bootstrap-icons';

export const MainFooter = () => {
	return (
		<footer className='mt-auto w-full max-w-[85rem] py-10 px-4 sm:px-6 lg:px-8 mx-auto'>
			{/* <!-- Grid --> */}
			<div className='text-center'>
				<div>
					<a
						className='flex-none text-xl font-semibold text-black dark:text-white'
						href='#'
						aria-label='Brand'>
						Brand
					</a>
				</div>
				{/* <!-- End Col --> */}

				<div className='mt-3'>
					<p className='text-gray-500'>
						Desarrollado con VSCode, TailwindCSS, React,{' '}
						<a
							className='font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400'
							href='https://preline.co/index.html'>
							PrelineUI Library.
						</a>
					</p>
					<p className='text-gray-500'>© Dario Mansilla - 2023</p>
				</div>

				{/* <!-- Social Brands --> */}
				<div className='mt-3 space-x-2'>
					<a
						className='inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800'
						href='#'>
						<Linkedin />
					</a>
					<a
						className='inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800'
						href='#'>
						<Github />
					</a>
					<a
						className='inline-flex justify-center items-center w-10 h-10 text-center text-gray-500 hover:bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition dark:text-gray-500 dark:hover:text-gray-200 dark:hover:bg-gray-800'
						href='#'>
						<Envelope />
					</a>
				</div>
				{/* <!-- End Social Brands --> */}
			</div>
			{/* <!-- End Grid --> */}
		</footer>
	);
};
