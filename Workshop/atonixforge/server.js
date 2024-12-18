// filepath: server.js
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());

app.get('/api/posts', (req, res) => {
  res.json([{ id: 1, title: 'Post 1' }, { id: 2, title: 'Post 2' }]);
});

app.get('/api/comments', (req, res) => {
  res.json([{ id: 1, content: 'Comment 1' }, { id: 2, content: 'Comment 2' }]);
});

app.listen(8000, () => {
  console.log('Server is running on port 8000');
});