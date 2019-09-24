const express = require('express');
const path = require('path');
const history = require('express-history-api-fallback');

const app = express();

const root = path.join(__dirname, 'dist');
app.use(express.static(root));
app.use(history('index.html', { root }));

app.listen(process.env.PORT || 8080);
