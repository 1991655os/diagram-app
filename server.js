const express = require('express');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 3000;

// Раздаём статические файлы из папки public
app.use(express.static(path.join(__dirname, 'public')));

// Отдаём diagram.html по умолчанию
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'diagram.html'));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
