import React from 'react';
import Youtube from './components/Youtube';
import Top from './components/Top';
import Fantasy from './components/Fantasy';
import Mystery from './components/Mystery';
import Scifi from './components/Scifi';
import Romance from './components/Romance';
import Thriller from './components/Thriller';
import Footer from './components/Footer';

function App() {
	return (
		<>
			<Top />
			<Youtube />
			<Fantasy />
			<Scifi />
			<Mystery />
			<Thriller />
			<Romance />
			<Footer />
		</>
	);
}

export default App;
