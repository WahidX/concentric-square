import React from "react";

function getStyle(width, color) {
	let boxStyle = {
		width: `${width}px`,
		height: `${width}px`,
		border: `2px solid ${color}`,
	};
	return boxStyle;
}

function Box(props) {
	let width = props.width;
	let stepSize = props.stepSize;
	let color = ["black", "red", "green", "blue"];

	let boxStyle = getStyle(width, color[0]);

	// let boxStyle = props.outerMost ? getStyle(width, color[(Math.random * 10) / 4]) : getStyle(width, color[(Math.random * 10) / 4]);

	if (width) {
		return (
			<div className="box-item" style={boxStyle}>
				<Box width={width - stepSize} stepSize={stepSize} />
			</div>
		);
	} else return null;
}

export default Box;
