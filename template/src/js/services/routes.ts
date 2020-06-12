// Packages
import React from "react";

const routes = [
	{
		path:"/",
		exact: false,
		component:React.lazy(() => import("../views/Home")),
		title: "Home"
	}
];

export default routes;