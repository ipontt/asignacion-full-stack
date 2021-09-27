import Grafico from './Grafico';
import Tabla from './Tabla';
import { useEffect, useState } from 'react';

function Detalle({ comuna }) {
	const [casos, setCasos] = useState([]);
	const [isFav, setIsFav] = useState(false);

	useEffect(() => {
		if (Object.keys(comuna).length !== 0) {
			fetch(`api/comunas/${comuna.id}/casos`)
				.then(res => res.json())
				.then(casos => setCasos(casos));

			let favoritas = localStorage.getItem('favoritas') ? JSON.parse(localStorage.getItem('favoritas')) : [];
			setIsFav(favoritas.map(fav => fav.id).indexOf(comuna.id) !== -1);
		}
	}, [comuna]);

	return (
		<div className="flex flex-col gap-4">
			<span className="text-2xl">{ comuna?.nombre } {isFav ? '♥' : '♡'}</span>
			<Grafico casos={ casos }/>
			<Tabla casos={ casos }/>
		</div>
	);
}

export default Detalle;
