import { Github } from 'react-bootstrap-icons'
import { VscLiveShare } from 'react-icons/vsc'
import { motion, useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

const Title = ({ title }) => {
	return (
		<div className="text-sm font-bold text-gray-800 rounded-lg bg-white p-4 md:text-xl dark:bg-gray-800 dark:text-gray-200 text-center">
			{title}
		</div>
	)
}
function Icons({ children }) {
	return (
		<div className="flex gap-3 justify-center items-center flex-wrap">
			{children}
		</div>
	)
}

function Description({ children }) {
	return <p className=" text-gray-200 mb-5">{children}</p>
}
const CardComponent = ({
	urlImg,
	title,
	children,
	direction,
	setIsModalOpen,
	deployLink,
	repoLink,
}) => {
	const className = 'bottom-full top-0 top-full left-0 left-full'
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
	}
	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		if (isInView) {
			animate(
				scope.current,
				{ opacity: 1 },
				{ duration: 1.0 },
				{ delay: 0.8 }
			)
		} else {
			animate(scope.current, { opacity: 0 })
		}
	}, [isInView])
	return (
		<div
			ref={scope}
			// onClick={() => setIsModalOpen((prev) => !prev)}
			className="group relative block rounded-xl overflow-hidden h-full"
		>
			<div className="rounded-xl overflow-hidden h-full">
				<img
					className="group-hover:scale-105 transition-transform duration-500 ease-in-out rounded-xl h-full w-full object-cover object-center"
					src={urlImg}
					alt="Imagen de presentación de un proyecto de programación"
				/>
			</div>
			<div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4">
				<Title title={title} />
			</div>
			<div
				className={`group-hover:top-0 absolute top-full bg-gray-800/80 rounded-lg p-4 transition-all lg:m-4 m-4  ease-in-out delay-75 duration-200   backdrop-blur`}
			>
				{children}
			</div>
			<div
				className={`group-hover:opacity-100 bottom-0 opacity-0 absolute rounded-lg transition-all ease-in-out delay-75 duration-200 `}
			>
				<a
					className="relative text-slate-500 z-30 flex justify-center item rounded-se-full aspect-square bg-gradient-to-tr from-slate-500/60 to-50% hover:text-white transition-all duration-200 delay-75 p-7 group/item font-bold"
					href={repoLink}
					target="_blank"
					onClick={(e) => e.stopPropagation()}
					rel="noreferrer"
				>
					<span className="group-hover/item:animate-bounce">
						<Github size={30} />
					</span>
					<div className="absolute bottom-0 left-0 rounded-full w-1 h-1 group-hover/item:scale-[55] bg-slate-500 shadow-lg transition-all duration-150 delay-75 -z-20"></div>
				</a>
			</div>
			<div
				className={`group-hover:opacity-100 bottom-0 right-0 opacity-0 absolute rounded-lg transition-all ease-in-out delay-75 duration-200 `}
			>
				<a
					className="relative text-slate-500 z-30 flex justify-center item rounded-et-full aspect-square bg-gradient-to-tl from-slate-500/60 to-50% hover:text-white transition-all duration-200 delay-75 p-7 group/item font-bold"
					href={deployLink}
					target="_blank"
					onClick={(e) => e.stopPropagation()}
					rel="noreferrer"
				>
					<span className="group-hover/item:animate-bounce group-hover:animate-pulse">
						<VscLiveShare size={30} />
					</span>
					<div className="absolute bottom-0 right-0 rounded-full w-1 h-1 group-hover/item:scale-[55] bg-slate-500 shadow-lg transition-all duration-150 delay-75 -z-20"></div>
				</a>
			</div>
		</div>
	)
}
CardComponent.Icons = Icons
CardComponent.Description = Description
export default CardComponent
