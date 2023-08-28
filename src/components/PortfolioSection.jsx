import { HomeTitle } from '../App';
import { motion } from 'framer-motion';
import {
	SiExpress,
	SiMongoose,
	SiNodedotjs,
	SiReactrouter,
	SiSocketdotio,
} from 'react-icons/si';
import { FaBootstrap, FaReact } from 'react-icons/fa';
import CardComponent from './CardComponent';
import { useEffect, useState } from 'react';

const ModalPortfolio = ({ isModalOpen, setIsModalOpen }) => {
	useEffect(() => {
		isModalOpen
			? (document.body.style.overflow = 'hidden')
			: (document.body.style.overflow = 'unset');
	}, [isModalOpen]);
	if (!isModalOpen) {
		return;
	}
	return (
		<div
			id='hs-basic-modal'
			className=' dark:bg-gray-800/80 w-full h-full fixed top-0 left-0 z-[60] overflow-x-hidden overflow-y-auto'>
			<div
				className='absolute inset-0 w-full h-full -z-40'
				onClick={() => setIsModalOpen(false)}></div>
			<div className='opacity-100 overlay-open:duration-500  transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto'>
				<div className='flex flex-col bg-white border shadow-sm rounded-xl dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7] z-40 relative'>
					<div className='flex justify-between items-center py-3 px-4 border-b dark:border-gray-700 '>
						<h3 className='font-bold text-gray-800 dark:text-white'>
							Modal title
						</h3>
						<button
							type='button'
							className='hs-dropdown-toggle inline-flex flex-shrink-0 justify-center items-center h-8 w-8 rounded-md text-gray-500 hover:text-gray-400 focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition-all text-sm dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800'
							data-hs-overlay='#hs-basic-modal'>
							<span className='sr-only'>Close</span>
						</button>
					</div>
					<div className='p-4 overflow-y-auto'>
						<p className='mt-1 text-gray-800 dark:text-gray-400'>
							This is a wider card with supporting text below as a natural
							lead-in to additional content.
						</p>
					</div>
					<div className='flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700'>
						<button
							type='button'
							className='hs-dropdown-toggle py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800'
							data-hs-overlay='#hs-basic-modal'>
							Close
						</button>
						<a
							className='py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800'
							href='#'>
							Save changes
						</a>
					</div>
				</div>
			</div>
		</div>
	);
};

export const PortfolioSection = () => {
	const [clickedProject, setClickedProject] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	return (
		<div>
			<ModalPortfolio
				isModalOpen={isModalOpen}
				setIsModalOpen={setIsModalOpen}
			/>
			<div className=' px-4 py-10 sm:px-3 lg:px-8 lg:py-14 mx-auto container'>
				{/* <!-- Grid --> */}
				<div className='grid sm:grid-cols-12 md:gap-6 gap-y-5 grid-rows-[0.5fr,33vh,33vh]'>
					<div className='col-span-4'>
						<HomeTitle
							title={'Proyectos'}
							subtitle={'Algunos de los proyectos en los cuales trabajé'}
						/>
					</div>
					<div className='sm:self-stretch  col-span-12 sm:col-span-8 md:col-span-6 md:col-start-7 lg:col-span-4 lg:col-start-1 md:row-span-2'>
						<CardComponent
							setIsModalOpen={setIsModalOpen}
							urlImg={
								'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80'
							}
							title={'RollingVet'}
							direction={'top'}>
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

					<div className=' col-span-12 sm:col-span-6 md:col-span-6 lg:col-span-4 lg:row-start-3 lg:col-start-5 '>
						{/* <!-- Card --> */}

						<CardComponent
							urlImg={
								'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80'
							}
							title={'Detección de colores'}
							direction={'bottom'}>
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
						{/* <!-- End Card --> */}
					</div>

					<div className='col-span-12 sm:col-span-6 md:col-span-6 lg:col-start-5 lg:row-start-1 lg:row-span-2 lg:col-span-4'>
						{/* <!-- Card --> */}
						<CardComponent
							urlImg={
								'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80'
							}
							title={'DescansAR'}
							direction={'top'}>
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
						{/* <!-- End Card --> */}
					</div>
					{/* <!-- End Col --> */}

					<div className='col-span-12 sm:col-span-12 md:col-span-6 lg:col-span-4  lg:row-span-3 lg:row-start-1 lg:col-start-9'>
						{/* <!-- Card --> */}
						<CardComponent
							urlImg={
								'https://images.unsplash.com/photo-1606868306217-dbf5046868d2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3481&q=80'
							}
							title={'Rediturre'}
							direction={'right'}>
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
