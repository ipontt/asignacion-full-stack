const express = require('express');
const app = express();

app.get('/api/', (request, response) => {
	response.json([
		{id: 1, nombre: 'Arica'},
		{id: 2, nombre: 'Brica'},
		{id: 3, nombre: 'Crica'},
		{id: 4, nombre: 'Drica'},
		{id: 5, nombre: 'Erica'},
		{id: 6, nombre: 'Frica'},
	]);
});

const port = 8000;

app.listen(port, () => `Server running on port ${port}.`);