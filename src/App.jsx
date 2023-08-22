import { useState } from 'react';
import { CustomHero } from './components/CustomHero';
import { PortfolioSection } from './components/PortfolioSection';
export const HomeTitle = ({ title, subtitle }) => {
	return (
		<div className='container mx-auto'>
			<h2 className='text-4xl leading-tight font-bold  md:leading-tight lg:text-6xl lg:leading-tight bg-clip-text   '>
				{title}
			</h2>
			<p className='text-lg leading-5 text-gray-400'>{subtitle}</p>
		</div>
	);
};

const SkillIcon = ({ name }) => {
	const URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/';
	return (
		<img
			src={URL + name}
			alt={`Logo of ${name}`}
			className='w-32 bg-gray-600/80 backdrop-blur-lg rounded-lg p-3'
		/>
	);
};
const imageSources = [
	'bootstrap/bootstrap-original.svg',
	'react/react-original.svg',
	'javascript/javascript-original.svg',
	'tailwindcss/tailwindcss-original-wordmark.svg',
	'css3/css3-original-wordmark.svg',
	'html5/html5-original-wordmark.svg',
	'nodejs/nodejs-original-wordmark.svg',
	'express/express-original-wordmark.svg',
	'mongodb/mongodb-original-wordmark.svg',
	'postgresql/postgresql-original.svg',
	'socketio/socketio-original-wordmark.svg',
];

function App() {
	return (
		<main className='bg-slate-900 text-gray-200 min-h-screen flex flex-col justify-between bg-gradient-to-b from-violet-600/[.15] via-transparent'>
			<CustomHero />
			<section className='bg-gradient-to-t from-violet-200/[0.15]'>
				<PortfolioSection />
			</section>
			<section className='bg-gradient-to-b from-violet-200/[0.15]'>
				<HomeTitle title={'Sobre mi'} subtitle={''} />
				<div className='container mx-auto'>
					<p>
						Soy desarrollador web full-stack e ingeniero civil. Durante la
						carrera siempre tuve la atracción por el lado de la programación
						para resolver algunos de los problemas que se nos presentaban.
					</p>
					<p>
						Poseo experiencia en lo que a trabajo en equipo se refiere, gracias
						a experiencias de trabajos pasados en el ámbito de cálculo de
						estructuras y proyectos afines.
					</p>
				</div>
			</section>
			<section className='bg-gradient-to-t from-violet-200/[0.15]'>
				<HomeTitle title={'Tecnologías'} subtitle={''} />
				<div className='container mx-auto grid grid-cols-5 grid-flow-row-dense gap-3'>
					{imageSources.map((img) => (
						<SkillIcon key={img} name={img} />
					))}
				</div>
			</section>
		</main>
	);
}

export default App;
