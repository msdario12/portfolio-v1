import { useAnimate, useInView } from 'framer-motion'
import { useEffect } from 'react'

export const SkillIcon = ({ name }) => {
	const URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'

	const [scope, animate] = useAnimate()
	const isInView = useInView(scope)

	useEffect(() => {
		if (isInView) {
			animate(
				scope.current,
				{ opacity: 1, scale: 1 },
				{ ease: 'easeInOut' },
				{ duration: 0.75 },
				{ delay: 0.8 }
			)
		} else {
			animate(scope.current, { opacity: 0, scale: 0 })
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isInView])
	return (
		<img
			ref={scope}
			src={URL + name}
			alt={`Logo of ${name}`}
			className="w-32 bg-gray-600/80 backdrop-blur-lg rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:scale-110"
		/>
	)
}
