import { Envelope, Github, Linkedin } from 'react-bootstrap-icons';
import { IconContainer } from './IconContainer';

export const MainNavBar = () => {
	return (
		<header className='flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white py-3 sm:py-0 dark:bg-gray-900/70 backdrop-blur-lg dark:border-gray-700 sticky top-0 inset-x-0 shadow-lg'>
			<nav
				className='relative max-w-7xl w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8'
				aria-label='Global'>
				<div className='flex items-center justify-between'>
					<a
						className='flex items-center text-2xl font-bold dark:text-white bg-gradient-to-tl from-blue-600 to-violet-600 rounded-full p-2 aspect-square '
						href='#'
						aria-label='Dario Mansilla'>
						DM
					</a>
					<div className='sm:hidden'>
						<button
							type='button'
							className='hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
							data-hs-collapse='#navbar-collapse-with-animation'
							aria-controls='navbar-collapse-with-animation'
							aria-label='Toggle navigation'>
							<svg
								className='hs-collapse-open:hidden w-4 h-4'
								width='16'
								height='16'
								fill='currentColor'
								viewBox='0 0 16 16'>
								<path
									fillRule='evenodd'
									d='M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z'
								/>
							</svg>
							<svg
								className='hs-collapse-open:block hidden w-4 h-4'
								width='16'
								height='16'
								fill='currentColor'
								viewBox='0 0 16 16'>
								<path d='M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z' />
							</svg>
						</button>
					</div>
				</div>
				<div
					id='navbar-collapse-with-animation'
					className='hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block'>
					<div className='flex flex-col font-bold text-lg gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7'>
						<a
							className='font-medium text-blue-600 sm:py-6 dark:text-blue-500'
							href='#'
							aria-current='page'>
							Proyectos
						</a>
						<a
							className='font-medium text-gray-500 hover:text-gray-400 sm:py-6 dark:text-gray-400 dark:hover:text-gray-500'
							href='#'>
							Tecnologías
						</a>
						<IconContainer url={'#'}>
							<Linkedin size={20} />
						</IconContainer>

						<IconContainer url={'#'}>
							<Github size={20} />
						</IconContainer>

						<IconContainer url={'#'}>
							<Envelope size={20} />
						</IconContainer>
					</div>
				</div>
			</nav>
		</header>
	);
};
