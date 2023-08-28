import { CustomHero } from './components/CustomHero';
import { PortfolioSection } from './components/PortfolioSection';
import { MainNavBar } from './components/MainNavBar';
import { MainFooter } from './components/MainFooter';
export const HomeTitle = ({ title, subtitle }) => {
	return (
		<div className='container mx-auto'>
			<h2 className='text-5xl leading-tight font-bold  md:leading-tight lg:text-6xl lg:leading-tight bg-clip-text   '>
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
			className='w-32 bg-gray-600/80 backdrop-blur-lg rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:scale-110'
		/>
	);
};
const backendImgSources = [
	'nodejs/nodejs-original-wordmark.svg',
	'express/express-original-wordmark.svg',
	'mongodb/mongodb-original-wordmark.svg',
	'postgresql/postgresql-original.svg',
	'socketio/socketio-original-wordmark.svg',
];
const frontendImgSources = [
	'bootstrap/bootstrap-original.svg',
	'react/react-original.svg',
	'javascript/javascript-original.svg',
	'tailwindcss/tailwindcss-original-wordmark.svg',
	'css3/css3-original-wordmark.svg',
	'/redux/redux-original.svg',
	'html5/html5-original-wordmark.svg',
];
function App() {
	return (
		<div>
			<main className='bg-slate-900 text-gray-200 min-h-screen flex flex-col justify-between bg-gradient-to-b from-violet-600/[.15] via-transparent'>
				<MainNavBar />
				<CustomHero />
				<section className='bg-gradient-to-t from-violet-200/[0.15]'>
					<PortfolioSection />
				</section>
				<section className='bg-gradient-to-t from-violet-200/[0.15]'>
					<HomeTitle title={'Tecnologías'} subtitle={''} />
					<div className='grid grid-cols-1 md:grid-cols-2 gap-5 container mx-auto min-h-screen content-center'>
						<div className='my-10 grid gap-5 grid-cols-12 mx-auto'>
							<div className='col-span-12'>
								<HomeTitle title={'Backend'} subtitle={''} />
							</div>
							{backendImgSources.map((img) => (
								<div key={img} className='col-span-6 md:col-span-4'>
									<SkillIcon key={img} name={img} />
								</div>
							))}
						</div>
						<div className='my-10 grid gap-5 grid-cols-12 mx-auto'>
							<div className='col-span-12 '>
								<HomeTitle title={'Frontend'} subtitle={''} />
							</div>
							{frontendImgSources.map((img) => (
								<div key={img} className='col-span-6 md:col-span-4'>
									<SkillIcon key={img} name={img} />
								</div>
							))}
						</div>
					</div>
				</section>
			</main>
			<MainFooter />
		</div>
	);
}

export default App;
