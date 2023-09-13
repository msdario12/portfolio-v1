export const AboutMe = () => {
	return (
		<div className="flex gap-y-5 items-center flex-col justify-center min-h-[50vh]">
			<h2 className="text-5xl leading-tight font-bold  md:leading-tight lg:text-6xl lg:leading-tight bg-clip-text text-center">
				Sobre Mí
			</h2>
			<p className="w-2/3 mx-auto text-2xl font-semibold text-gray-400 leading-7 mt-4 ">
				Estudiante avanzado de Ingenieria Civil y{' '}
				<span className="text-gray-100">FullStack Web Developer </span>
				actualmente viviendo en Tucumán, Argentina. Me considero
				autodidacta, y siempre buscando soluciones innovadoras a las
				distintas problematicas.
			</p>
			<a
				href="https://drive.google.com/drive/folders/1St12WMRQA8U7_ts8s4hy4X2b9fk0DrI0?usp=sharing"
				target="_blank"
				rel="noreferrer"
				className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
			>
				Descargar CV
			</a>
		</div>
	)
}
