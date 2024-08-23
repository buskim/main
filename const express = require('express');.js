const express = require('express');
const app = express();

// POST 요청만 허용
app.post('/api/tracking', (req, res) => {
  res.send('Tracking data received.');
});

// 모든 다른 메서드에 대해 405 오류 응답
app.all('/api/tracking', (req, res) => {
  res.status(405).send('Method Not Allowed');
});

app.listen(3000, () => console.log('Server running on port 3000'));
