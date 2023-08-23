export const CustomHero = () => {
	return (
		<div>
			{/* <!-- Hero --> */}
			<div className='min-h-screen flex justify-center items-center'>
				<div className=''>
					<div className='max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8'>
						{/* <!-- Announcement Banner --> */}
						<div className='flex justify-center'>
							<a
								className='group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md'
								href='#'>
								<p className='mr-2 inline-block text-white text-sm'>Sobre mi</p>
								<span className='group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm'>
									<svg
										className='w-2.5 h-2.5'
										width='16'
										height='16'
										viewBox='0 0 16 16'
										fill='none'>
										<path
											d='M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
										/>
									</svg>
								</span>
							</a>
						</div>
						{/* <!-- End Announcement Banner --> */}

						{/* <!-- Title --> */}
						<div className='max-w-3xl text-center mx-auto'>
							<h1 className='block font-medium text-gray-200 text-4xl sm:text-5xl md:text-6xl lg:text-7xl'>
								Dario Ignacio Mansilla
							</h1>
						</div>
						{/* <!-- End Title --> */}

						<div className='max-w-3xl text-center mx-auto'>
							<p className='text-lg text-gray-400'>
								Ingeniero civil || Desarrollador Full Stack || React Developer
								|| Node Developer
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
			</div>
			{/* <!-- End Hero --> */}
		</div>
	);
};
