// Simple HTTP server to serve contents of ./dist as an SPA

import express from 'express';
import { dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const port = 8080;
const rootPath = `${__dirname}/dist`;
const app = express();

app.use(express.static(rootPath));

app.get('*', (req, res) => {
    res.sendFile(`${rootPath}/index.html`);
});

app.listen(port, () => console.log(`Serving site at http://localhost:${port}`));