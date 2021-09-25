import Placeholder from '../Placeholder';
import Grafico from './Grafico';
import Tabla from './Tabla';

function Detalle() {
	return (
		<div className="flex flex-col gap-4 h-96">
			<Placeholder className="w-full"/>
			<Grafico/>
			<Tabla/>
		</div>
	);
}

export default Detalle;
