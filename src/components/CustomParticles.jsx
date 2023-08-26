import { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from 'tsparticles';

export const CustomParticles = () => {
	const particlesInit = useCallback(async (engine) => {
		console.log(engine);
		// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
		// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
		// starting from v2 you can add only the features you need reducing the bundle size
		await loadFull(engine);
	}, []);
	const particlesLoaded = useCallback(async (container) => {
		await console.log(container);
	}, []);
	return (
		<Particles
			id='tsparticles'
			init={particlesInit}
			loaded={particlesLoaded}
			options={{
				fpsLimit: 120,
				smooth: true,
				style: {
					height: '100vh',
					zIndex: -10,
				},
				fullScreen: false,
				eOnOutsideViewport: true,
				interactivity: {
					events: {
						onHover: {
							enable: true,
							mode: 'repulse',
						},
						resize: true,
					},
					modes: {
						push: {
							quantity: 4,
						},
						repulse: {
							distance: 50,
							duration: 0.4,
						},
					},
				},
				particles: {
					color: {
						value: '#ffffff',
					},
					links: {
						color: '#ffffff',
						distance: 150,
						enable: true,
						opacity: 0.3,
						width: 1,
					},
					move: {
						direction: 'none',
						enable: true,
						outModes: {
							default: 'bounce',
						},
						random: true,
						speed: 1,
						straight: false,
					},
					number: {
						density: {
							enable: true,
							area: 1200,
						},
						value: 80,
					},
					opacity: {
						value: 0.5,
					},
					shape: {
						type: 'circle',
					},
					size: {
						value: { min: 1, max: 8 },
					},
				},
				detectRetina: true,
			}}
		/>
	);
};
