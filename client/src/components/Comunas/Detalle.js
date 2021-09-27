import Grafico from './Grafico';
import Tabla from './Tabla';
import { useEffect } from 'react';

function Detalle({ comuna }) {
	const nombre = comuna.nombre;
	const id = comuna.id;

  useEffect(() => {
  	console.log(nombre);
  }, [nombre]);

	return (
		<div className="flex flex-col gap-4 h-96">
			<span className="text-2xl">{ nombre } ♥</span>
			<Grafico/>
			<Tabla comunaId={ id }/>
		</div>
	);
}

export default Detalle;
