import Grafico from './Grafico';
import Tabla from './Tabla';

function Detalle({ comuna }) {
	return (
		<div className="flex flex-col gap-4 h-96">
			<span className="text-2xl">{ comuna?.nombre } ♥</span>
			<Grafico/>
			<Tabla/>
		</div>
	);
}

export default Detalle;
