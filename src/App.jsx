import { useState } from 'react';
import { CustomHero } from './components/CustomHero';
import { PortfolioSection } from './components/PortfolioSection';

function App() {
	const [count, setCount] = useState(0);

	return (
		<main className='bg-slate-900 text-white min-h-screen flex flex-col justify-between bg-gradient-to-b from-violet-600/[.15] via-transparent'>
			<CustomHero />
			<h2 className='text-3xl leading-tight font-bold md:text-5xl md:leading-tight lg:text-5xl lg:leading-tight bg-clip-text bg-gradient-to-r from-white to-gray-600 text-transparent container mx-auto px-4'>
				Proyectos
			</h2>
			<PortfolioSection />
		</main>
	);
}

export default App;
