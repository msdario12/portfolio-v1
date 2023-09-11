export const SkillIcon = ({ name }) => {
	const URL = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/'
	return (
		<img
			src={URL + name}
			alt={`Logo of ${name}`}
			className="w-32 bg-gray-600/80 backdrop-blur-lg rounded-lg p-3 hover:bg-gray-200 transition-all duration-300 ease-in-out hover:scale-110"
		/>
	)
}
