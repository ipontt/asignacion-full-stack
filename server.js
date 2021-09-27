const express = require('express');
const sqlite3 = require('sqlite3');
const db = new sqlite3.Database('./db/database.sqlite');
const app = express();

app.get('/api/comunas/', (request, response) => {
	db.all(
		`SELECT c.id, c.nombre, r.nombre as region
		FROM comunas AS c
		INNER JOIN regiones AS r ON r.id = c.region_id
		WHERE c.nombre NOT LIKE ?
		ORDER BY c.nombre ASC`, ['Desconocid%'],
		(error, result) => {
			if (error) {
				response.json(error);
			}
			response.json(result);
		}
	);
});

app.get('/api/comunas/:comuna_id/casos/', (request, response) => {
	const { comuna_id } = request.params;

	db.all(
		`SELECT c.fecha, c.cantidad
		FROM casos AS c
		WHERE comuna_id = ?
		ORDER BY c.fecha`, [comuna_id],
		(error, result) => {
			if (error) {
				response.json(error);
			}
			response.json(result);
		}
	);
});

const port = 8000;

app.listen(port, () => `Server running on port ${port}.`);

process.on('SIGINT', () => db.close());
process.on('exit', () => db.close());