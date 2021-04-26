import React from "react";
import Box from "./Box";

/*
Pattern: 
https://etc.usf.edu/clipart/42800/42859/con4-4_42859.htm
*/

function App(props) {
	let paretnWidth = 400;
	let stepSize = 100;
	let boxes = [];
	for (let width = stepSize; width <= paretnWidth; width += stepSize) {
		boxes.push(width);
	}

	return (
		<div className="app-container">
			{/* <div className="left-box">Hello</div> */}
			<Box width="400" stepSize="50" outerMost={true} />
		</div>
	);
}

export default App;
