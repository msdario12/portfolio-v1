import { CustomHero } from './components/CustomHero'
import { MainFooter } from './components/MainFooter'
import { MainNavBar } from './components/MainNavBar'
import { PortfolioSection } from './components/PortfolioSection'
import { SkillSection } from './components/SkillSection'
export const HomeTitle = ({ title, subtitle }) => {
	return (
		<div className="container mx-auto">
			<h2 className="text-5xl leading-tight font-bold  md:leading-tight lg:text-6xl lg:leading-tight bg-clip-text   ">
				{title}
			</h2>
			<p className="text-lg leading-5 text-gray-400">{subtitle}</p>
		</div>
	)
}

function App() {
	return (
		<div style={{ scrollbarGutter: 'stable' }}>
			<main className="bg-slate-900 text-gray-200 min-h-screen flex flex-col justify-between bg-gradient-to-b from-violet-600/[.15] via-transparent">
				<MainNavBar />
				<CustomHero />
				<section
					className="bg-gradient-to-t from-violet-200/[0.15]"
					id="portfolio"
				>
					<PortfolioSection />
				</section>
				<section
					className="bg-gradient-to-b from-violet-200/[0.15]"
					id="tech"
				>
					<SkillSection />
				</section>
			</main>
			<MainFooter />
		</div>
	)
}

export default App
