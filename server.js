const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Раздаём все файлы из папки проекта
app.use(express.static(path.join(__dirname)));

// Отдаём diagram.html при заходе на сайт
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'diagram.html'));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
