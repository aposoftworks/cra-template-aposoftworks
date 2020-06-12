// Packages
import React 						from 'react';
import { Router, Route, Switch }	from "react-complete-router";

// Services
import routes from "../../services/routes";

// Styles
import './App.css';

export default function App () {

    //-------------------------------------------------
    // Memos
	//-------------------------------------------------

	const renderRoutes = React.useMemo(() => {
		let response = [];
		
		for (let i = 0; i < routes.length; i++) {
			response.push(
				<Route {...routes[i]} />
			);
		}

		return response;
	}, []);

    //-------------------------------------------------
    // Render
	//-------------------------------------------------

	return (
		<Router basetitle={[process.env.REACT_APP_NAME, " - "]}>
			<Switch>
				{renderRoutes}
			</Switch>
		</Router>
	);
}
