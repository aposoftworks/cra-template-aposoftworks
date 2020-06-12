// Packages
import React from 'react';

// Images
import logo from '../../../img/logo.svg';

// Styles
import './Home.css';

export default function Home () {

    //-------------------------------------------------
    // Render
	//-------------------------------------------------
	
	return (
		<div className="App">
			<header className="App-header">
				<img src={logo} className="App-logo" alt="logo" />
				<p>Edit <code>src/App.tsx</code> and save to reload.</p>
				<a
					className="App-link"
					href="https://reactjs.org"
					target="_blank"
					rel="noopener noreferrer"
				>
					Learn React
				</a>
			</header>
		</div>
	);
}