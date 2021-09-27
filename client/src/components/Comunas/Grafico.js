import { Line } from 'react-chartjs-2';
import { useEffect, useState } from 'react';
import resolveConfig from 'tailwindcss/resolveConfig';

const tailwind = resolveConfig({});

function Grafico({ casos }) {
	const [chart, setChart] = useState('');

	useEffect(() => {
		if (casos.length !== 0) {
			const labels = casos.map(caso => caso.fecha);
			let dataset_1 = [];
			casos.map(caso => caso.cantidad).forEach((cantidad, index) => {
				if (cantidad !== null) {
					dataset_1[index] = cantidad;
				}
			})
			const data = {
				labels: labels,
				datasets: [
					{
						label: 'casos confirmados',
						data: dataset_1,
						fill: false,
						backgroundColor: tailwind.theme.colors.red['500'],
					},
				],
			};
			const options = {
				scales: {
					yAxes: [
						{
							ticks: {
								beginAtZero: false,tickMarkLength: 5,
							},
						},
					],
				},
				height: '4rem',
			};
			setChart(<Line data={data} options={options} />);
		}
	}, [casos])

	return (
		<div className="w-full flex flex-col">
			<div className="py-2 align-middle inline-block min-w-full">
				<div className="shadow border-2 border-gray-700 sm:rounded-tl-lg">
					{chart}
				</div>
			</div>
		</div>
	);
}

export default Grafico;
