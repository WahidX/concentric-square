import React from "react";
import Box from "./Box";

import { AppDataProvider } from "../contexts/appContext";

/*
Pattern: 
https://etc.usf.edu/clipart/42800/42859/con4-4_42859.htm
*/

function App(props) {
	let paretnWidth = 500;
	let stepSize = 100;
	let boxes = [];
	for (let width = stepSize; width <= paretnWidth; width += stepSize) {
		boxes.push(width);
	}

	return (
		<AppDataProvider>
			<div className="app-container">
				{/* <div className="left-box">Hello</div> */}
				<Box width={paretnWidth} stepSize={stepSize} outerMost={true} />
			</div>
		</AppDataProvider>
	);
}

export default App;
