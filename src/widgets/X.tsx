import React from "react";

const X = ({ size = 32, padding = 10 }) => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox={`0 0 ${size} ${size}`}
			stroke="currentColor"
			strokeWidth="1"
			strokeLinecap={"round"}
		>
			<line
				x1={`${padding}`}
				y1={`${size - padding}`}
				x2={`${size - padding}`}
				y2={`${padding}`}
			/>
			<line
				x1={`${size - padding}`}
				y1={`${size - padding}`}
				x2={`${padding}`}
				y2={`${padding}`}
			/>
		</svg>
	);
};

export default X;
