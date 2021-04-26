import React, { createContext, useState } from "react";

export const AppDataContext = createContext();

export const AppDataProvider = (props) => {
	const [appData, setAppData] = useState({
		color: "black",
		changeColor: false,
	});

	return <AppDataContext.Provider value={[appData, setAppData]}>{props.children}</AppDataContext.Provider>;
};
