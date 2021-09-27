import Grafico from './Grafico';
import Tabla from './Tabla';
import { useEffect, useState } from 'react';

function Detalle({ comuna }) {
	const [casos, setCasos] = useState([]);

	useEffect(() => {
		if (Object.keys(comuna).length !== 0) {
			fetch(`api/comunas/${comuna.id}/casos`)
				.then(res => res.json())
				.then(casos => setCasos(casos));
		}
	}, [comuna]);

	return (
		<div className="flex flex-col gap-4 h-96">
			<span className="text-2xl">{ comuna?.nombre } ♥</span>
			<Grafico casos={ casos }/>
			<Tabla casos={ casos }/>
		</div>
	);
}

export default Detalle;
