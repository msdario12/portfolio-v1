import { useState } from 'react';
import { CustomHero } from './components/CustomHero';

function App() {
	const [count, setCount] = useState(0);

	return (
		<>
			<CustomHero />
		</>
	);
}

export default App;
