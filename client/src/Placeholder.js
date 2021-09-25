import * as React from "react";

function Placeholder(props) {
	const path = React.createElement('path', {
		vectorEffect: 'non-scaling-stroke',
		strokeWidth: 2,
		d: 'M0 0l200 200M0 200L200 0'
	});
	const svg = React.createElement('svg', Object.assign({
		preserveAspectRatio: 'none',
		stroke: 'currentColor',
		fill: 'none',
		viewBox: '0 0 200 200'
	}, props), path);

	return svg;
}

export default Placeholder;
