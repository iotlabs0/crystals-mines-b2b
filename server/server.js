const express = require('express');
const app = express();
const PORT = 5000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello from Express backend!');
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Backend is working fine' });
});

app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});
