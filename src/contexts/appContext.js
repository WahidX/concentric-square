import React, { createContext, useState } from "react";
import { getRandomColor } from "../utils";

export const AppDataContext = createContext();

export const AppDataProvider = (props) => {
	const [appData, setAppData] = useState({
		color: getRandomColor(),
		changeColor: false,
	});

	return <AppDataContext.Provider value={[appData, setAppData]}>{props.children}</AppDataContext.Provider>;
};
