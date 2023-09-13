import { useEffect } from 'react'
import { AboutMe } from './components/AboutMe'
import { CustomHero } from './components/CustomHero'
import { MainFooter } from './components/MainFooter'
import { MainNavBar } from './components/MainNavBar'
import { PortfolioSection } from './components/PortfolioSection'
import { SkillSection } from './components/SkillSection'
function App() {
	useEffect(() => {
		document.title = 'Dario Mansilla - Portfolio'
	}, [])
	return (
		<div style={{ scrollbarGutter: 'stable' }}>
			<main className="bg-slate-900 text-gray-200 min-h-screen flex flex-col justify-between bg-gradient-to-b from-violet-600/[.15] via-transparent">
				<MainNavBar />
				<CustomHero />
				<section
					className="bg-gradient-to-t from-violet-200/[0.15]"
					id="about-me"
				>
					<AboutMe />
				</section>
				<section
					className="bg-gradient-to-b from-violet-200/[0.15]"
					id="portfolio"
				>
					<PortfolioSection />
				</section>
				<section
					className="bg-gradient-to-t from-violet-200/[0.15]"
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
