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
