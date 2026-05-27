const express = require('express');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/api/hello', (req, res) => {
    res.json({
        imie: "Illia",
        nazwisko: "Boniakievich",
        indeks: "77373"
    });
});

app.listen(port, () => {
    console.log(`Aplikacja działa!`);
    console.log(`Endpoint JSON: http://localhost:${port}/api/hello`);
    console.log(`Strona HTML: http://localhost:${port}`);
});