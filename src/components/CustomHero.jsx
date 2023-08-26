import { CustomParticles } from './CustomParticles';

export const CustomHero = () => {
	return (
		<div>
			{/* <!-- Hero --> */}

			<div className='min-h-screen flex justify-center lg:justify-start items-center relative mx-auto container'>
				<div className='max-w-[85rem] px-4 sm:px-6 py-24 space-y-8 text-center '>
					{/* <!-- Title --> */}
					<div className='max-w-3xl  '>
						<h1 className='block text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold'>
							Dario Ignacio Mansilla

						</h1>
					</div>
					{/* <!-- End Title --> */}

					<div className='max-w-3xl mx-auto'>
						<p className='text-lg lg:text-2xl text-gray-400 font-semibold'>
							Desarrollador Full Stack || React Developer || Node Developer ||
							Ingeniero civil
						</p>
					</div>

					{/* <!-- Buttons --> */}
					{/* <div className='text-center'>
						<a
							className='inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 ;hadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-white text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800'
							href='#'>
							Contacto
						</a>
					</div> */}
					{/* <!-- End Buttons --> */}
				</div>
				<div className='absolute lg:relative lg:w-1/2 inset-0 h-screen w-full '>
					<CustomParticles />
				</div>
			</div>
			{/* <!-- End Hero --> */}
		</div>
	);
};
