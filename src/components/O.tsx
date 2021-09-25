import React from "react";

const O = ({ size = 32, padding = 9 }) => {
	return (
		<svg xmlns="http://www.w3.org/2000/svg" viewBox={`0 0 ${size} ${size}`}>
			<circle
				cx={size / 2}
				cy={size / 2}
				r={size / 2 - padding}
				fill="currentColor"
			/>
		</svg>
	);
};

export default O;
