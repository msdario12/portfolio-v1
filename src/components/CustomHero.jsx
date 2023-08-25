import { CustomParticles } from './CustomParticles';

export const CustomHero = () => {
	return (
		<div>
			{/* <!-- Hero --> */}

			<div className='min-h-screen flex justify-center items-center relative'>
				<div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8'>
					<div className='absolute inset-0'>
						<CustomParticles />
					</div>
					{/* <!-- Title --> */}
					<div className='max-w-3xl text-center mx-auto'>
						<h1 className='block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
							Dario Ignacio Mansilla
						</h1>
					</div>
					{/* <!-- End Title --> */}

					<div className='max-w-3xl text-center mx-auto'>
						<p className='text-lg text-gray-400'>
							Ingeniero civil || Desarrollador Full Stack || React Developer ||
							Node Developer
						</p>
					</div>

					{/* <!-- Buttons --> */}
					<div className='text-center'>
						<a
							className='inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800'
							href='#'>
							Contacto
						</a>
					</div>
					{/* <!-- End Buttons --> */}
				</div>
			</div>
			{/* <!-- End Hero --> */}
		</div>
	);
};
