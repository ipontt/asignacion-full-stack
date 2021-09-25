import { useState } from 'react';
import { classNames } from '../../Helpers';

const tabs = ['Comunas', 'Favoritas'];

let favoritas = localStorage.getItem('favoritas') ? JSON.parse(localStorage.getItem('favoritas')) : null;
if (!Array.isArray(favoritas)) {
	favoritas = [];
	localStorage.setItem('favoritas', JSON.stringify(favoritas));
}

function Lista({ comunas, verComuna }) {
	const [currentTab, setCurrentTab] = useState('Comunas');
	const [comunasFavoritas, setComunasFavoritas] = useState(favoritas);
	const [search, setSearch] = useState('');

	function toggleFav(comuna) {
		if (favoritas.find(favorita => (favorita.id === comuna.id) && (favorita.nombre === comuna.nombre))) {
			favoritas = favoritas.filter(favorita => (favorita.id !== comuna.id) && (favorita.nombre !== comuna.nombre));
		} else {
			favoritas.push(comuna);
		}
		favoritas = favoritas.filter((value, index, array) => array.indexOf(value) === index).sort((a, b) => a.id - b.id);
		localStorage.setItem('favoritas', JSON.stringify(favoritas));
		setComunasFavoritas(favoritas);
	}

	return (
		<div className="w-full h-96 flex flex-col border border-gray-700">
			<div className="flex justify-around items-center">
				{tabs.map((tab, index) => (
					<button
						key={`tab-${index}`}
						className={classNames(
							(currentTab === tab) ? 'text-gray-900' : 'text-gray-500 hover:text-gray-700',
							'font-semibold flex-grow px-6 py-3 border border-gray-700',
						)}
						onClick={() => setCurrentTab(tab)}
					>
						{tab}
					</button>
				))}
			</div>
			<div className="flex gap-4 flex-col flex-grow border border-gray-700 p-4 bg-green-300">
				<div className="flex justify-center">
					<input
						onChange={event => setSearch(event.target.value)}
						className="flex-grow px-2 py-1 border border-gray-700"
						type="text"
						role="search"
						placeholder="Buscador"/>
				</div>
				<div
					className={classNames(
						(currentTab === 'Comunas') ? '' : 'hidden',
						"flex-grow border border-red-500"
					)}
				>
					<ul className="p-2">
						{comunas.filter(comuna => comuna.nombre.toLowerCase().includes(search)).map(comuna => (
							<li key={`com-${comuna.id}`} className="flex justify-between items-center">
								<button onClick={() => verComuna(comuna)}>{comuna.nombre}</button>
								<button
									className="text-2xl transition hover:scale-150 ease-in-out transform duration-300"
									onClick={() => toggleFav(comuna)}
								>
									{comunasFavoritas.find(c => c.nombre === comuna.nombre) ? '♥' : '♡'}
								</button>
							</li>
						))}
					</ul>
				</div>
				<div
					className={classNames(
						(currentTab === 'Favoritas') ? '' : 'hidden',
						"flex-grow border border-blue-500"
					)}
				>
					<ul className="p-2">
						{comunasFavoritas.filter(comuna => comuna.nombre.toLowerCase().includes(search)).map(comuna => (
							<li key={`fav-${comuna.id}`} className="flex justify-between items-center">
								<button>{comuna.nombre}</button>
								<button
									className="text-2xl transition hover:scale-150 ease-in-out transform duration-300"
									onClick={() => toggleFav(comuna)}
								>
									{comunasFavoritas.find(c => c.nombre === comuna.nombre) ? '♥' : '♡'}
								</button>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}

export default Lista;
