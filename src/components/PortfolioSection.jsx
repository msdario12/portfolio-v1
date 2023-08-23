import { HomeTitle } from '../App';
import {
	SiExpress,
	SiMongoose,
	SiNodedotjs,
	SiReactrouter,
	SiSocketdotio,
} from 'react-icons/si';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import CardComponent from './CardComponent';

export const PortfolioSection = () => {
	return (
		<div>
			{/* <!-- Masonry Cards --> */}
			<div className='container px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto'>
				{/* <!-- Grid --> */}
				<div className='grid sm:grid-cols-12 gap-6'>
					<div className='col-span-4'>
						<HomeTitle
							title={'Proyectos'}
							subtitle={'Algunos de los proyectos en los cuales trabajé'}
						/>
					</div>
					<div className='sm:self-end col-span-12 sm:col-span-7 md:col-span-8 lg:col-span-5 lg:col-start-3'>
						<CardComponent
							urlImg={
								'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80'
							}
							title={'RollingVet'}>
							<CardComponent.Description>
								Lorem ipsum dolor sit amet consectetur, adipisicing elit.
								Eveniet sunt sed est illo in officia doloribus cum expedita
								itaque. Atque id debitis laboriosam perferendis alias ipsam
								placeat aliquam distinctio dolor!
							</CardComponent.Description>
							<CardComponent.Icons>
								<FaReact size={40} />
								<FaBootstrap size={40} />
								<SiExpress size={40} />
								<SiNodedotjs size={40} />
								<SiReactrouter size={40} />
								<SiMongoose size={40} />
								<SiSocketdotio size={40} />
							</CardComponent.Icons>
						</CardComponent>
					</div>
					{/* <!-- End Col --> */}

					<div className='sm:self-end col-span-12 sm:col-span-5 md:col-span-4 lg:col-span-3'>
						{/* <!-- Card --> */}
						<a
							className='group relative block rounded-xl overflow-hidden'
							href='#'>
							<div className='aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden'>
								<img
									className='group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover'
									src='https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&q=80'
									alt='Image Description'
								/>
							</div>
							<div className='absolute bottom-0 left-0 right-0 p-2 sm:p-4'>
								<div className='text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200'>
									Women in engineering
								</div>
							</div>
						</a>
						{/* <!-- End Card --> */}
					</div>
					{/* <!-- End Col --> */}

					<div className='col-span-12 md:col-span-4'>
						{/* <!-- Card --> */}
						<a
							className='group relative block rounded-xl overflow-hidden'
							href='#'>
							<div className='aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden'>
								<img
									className='group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover'
									src='https://images.unsplash.com/photo-1606836576983-8b458e75221d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80'
									alt='Image Description'
								/>
							</div>
							<div className='absolute bottom-0 left-0 right-0 p-2 sm:p-4'>
								<div className='text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200'>
									Pride 2021
								</div>
							</div>
						</a>
						{/* <!-- End Card --> */}
					</div>
					{/* <!-- End Col --> */}

					<div className='col-span-12 sm:col-span-6 md:col-span-4'>
						{/* <!-- Card --> */}
						<a
							className='group relative block rounded-xl overflow-hidden'
							href='#'>
							<div className='aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden'>
								<img
									className='group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover'
									src='https://images.unsplash.com/photo-1598929438701-ef29ab0bb61a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80'
									alt='Image Description'
								/>
							</div>
							<div className='absolute bottom-0 left-0 right-0 p-2 sm:p-4'>
								<div className='text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200'>
									Data at Preline
								</div>
							</div>
						</a>
						{/* <!-- End Card --> */}
					</div>
					{/* <!-- End Col --> */}

					<div className='col-span-12 sm:col-span-6 md:col-span-4'>
						{/* <!-- Card --> */}
						<a
							className='group relative block rounded-xl overflow-hidden'
							href='#'>
							<div className='aspect-w-12 aspect-h-7 sm:aspect-none rounded-xl overflow-hidden'>
								<img
									className='group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl w-full object-cover'
									src='https://images.unsplash.com/photo-1467043153537-a4fba2cd39ef?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1019&q=80'
									alt='Image Description'
								/>
							</div>
							<div className='absolute bottom-0 left-0 right-0 p-2 sm:p-4'>
								<div className='text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200'>
									Empowered management
								</div>
							</div>
						</a>
						{/* <!-- End Card --> */}
					</div>
					{/* <!-- End Col --> */}
				</div>
				{/* <!-- End Grid --> */}
			</div>
			{/* <!-- End Masonry Cards --> */}
		</div>
	);
};
