import React, { useContext } from "react";
import { getRandomColor } from "../utils";
import { AppDataContext } from "../contexts/appContext";

function getStyle(width, color) {
	let boxStyle = {
		width: `${width}px`,
		height: `${width}px`,
		border: `5px solid ${color}`,
	};
	return boxStyle;
}

function Box(props) {
	let width = props.width;
	let stepSize = props.stepSize;
	const [appData, setAppData] = useContext(AppDataContext);
	let isLast = width - stepSize === 0;

	let boxStyle = props.outerMost ? getStyle(width, appData.color) : getStyle(width, "black");

	function changeColor() {
		if (isLast) {
			setAppData((prev) => {
				return {
					...prev,
					color: getRandomColor(),
				};
			});
		}
	}

	if (width) {
		return (
			<div className="box-item" style={boxStyle} onClick={changeColor}>
				<Box width={width - stepSize} stepSize={stepSize} />
			</div>
		);
	} else return null;
}

export default Box;
