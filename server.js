const express = require('express');
const app = express();

app.get('/api/', (request, response) => {
	response.json([
		{id: 1, value: 'lorem'},
		{id: 2, value: 'ipsum'},
	]);
});

const port = 8000;

app.listen(port, () => `Server running on port ${port}.`);