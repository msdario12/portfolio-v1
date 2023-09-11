import { LinkedinLink } from './LinkedinLink'
import { GitHubLink } from './GitHubLink'
import { EmailLink } from './EmailLink'
export const MainFooter = () => {
	return (
		<footer className="mt-auto w-full py-10 px-4 sm:px-6 lg:px-8 bg-slate-900">
			{/* <!-- Grid --> */}
			<div className="text-center">
				<div className="mt-3">
					<p className="text-gray-500">
						Desarrollado con VSCode, TailwindCSS, React,{' '}
						<a
							className="font-semibold text-blue-600 hover:text-blue-700 dark:text-blue-500 dark:hover:text-blue-400"
							href="https://preline.co/index.html"
						>
							PrelineUI Library.
						</a>
					</p>
					<p className="text-gray-500">© Dario Mansilla - 2023</p>
				</div>

				{/* <!-- Social Brands --> */}
				<div className="mt-3 space-x-2">
					<LinkedinLink />
					<GitHubLink />
					<EmailLink />
				</div>
				{/* <!-- End Social Brands --> */}
			</div>
			{/* <!-- End Grid --> */}
		</footer>
	)
}
