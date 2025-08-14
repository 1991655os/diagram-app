const express = require('express');
const path = require('path');
const app = express();

// Отдаём статические файлы (diagram.html и папку с ресурсами)
app.use(express.static(__dirname));

// Отдаём diagram.html при заходе на /
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'diagram.html'));
});

// Используем порт, который назначает Render
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
