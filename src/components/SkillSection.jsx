import { HomeTitle } from '../HomeTitle'
import { HomeSubtitle } from './HomeSubtitle'
import { SkillIcon } from './SkillIcon'
import { motion } from 'framer-motion'

const backendImgSources = [
	'nodejs/nodejs-original-wordmark.svg',
	'express/express-original-wordmark.svg',
	'mongodb/mongodb-original-wordmark.svg',
	'postgresql/postgresql-original.svg',
	'socketio/socketio-original-wordmark.svg',
]
const frontendImgSources = [
	'bootstrap/bootstrap-original.svg',
	'react/react-original.svg',
	'javascript/javascript-original.svg',
	'tailwindcss/tailwindcss-original-wordmark.svg',
	'css3/css3-original-wordmark.svg',
	'/redux/redux-original.svg',
	'html5/html5-original-wordmark.svg',
]
export const SkillSection = () => {
	return (
		<div>
			<div className="grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto min-h-screen content-center">
				<div className="row-start-1">
					<HomeTitle title={'Tecnologias'} />
				</div>
				<div className="my-10  row-start-2 grid gap-5 grid-cols-12 mx-auto">
					<div className="col-span-12">
						<HomeSubtitle subtitle={'Backend'} />
					</div>
					{backendImgSources.map((img) => (
						<motion.div
							transition={{
								delay: 0.75,
								staggerChildren: 1,
							}}
							key={img}
							className="col-span-6 md:col-span-4"
						>
							<SkillIcon key={img} name={img} />
						</motion.div>
					))}
				</div>
				<div className="my-10 grid gap-5 row-start-2 grid-cols-12 mx-auto">
					<div className="col-span-12 ">
						<HomeSubtitle subtitle={'Frontend'} />
					</div>
					{frontendImgSources.map((img) => (
						<motion.div
							transition={{
								delay: 0.75,
								staggerChildren: 1,
							}}
							key={img}
							className="col-span-6 md:col-span-4"
						>
							<SkillIcon key={img} name={img} />
						</motion.div>
					))}
				</div>
			</div>
		</div>
	)
}
