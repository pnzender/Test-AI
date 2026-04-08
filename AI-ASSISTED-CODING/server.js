const express = require('express');
const app = express();
const authRoutes = require('./routes/auth');
const authMiddleware = require('./middleware/auth');
const db = require('./db');

app.use(express.json());

app.use('/api/auth', authRoutes);

app.get('/api/protected', authMiddleware, (req, res) => {
  res.json({ message: 'Protected content', user: req.user });
});

app.get('/', (req, res) => res.send('Express SQLite JWT API'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
