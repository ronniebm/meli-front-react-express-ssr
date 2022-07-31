import React from 'react';
import ReactDOMServer from 'react-dom/server';
import express from 'express';
import App from '../client/src/App';
import { StaticRouter } from 'react-router-dom/server';

const app = express();
const port = 3000;

import routes from './app/router/routes';

app.use('/api', routes);

app.use(express.static('dist'));

app.get('*', (req, res) => {
  const jsx = ReactDOMServer.renderToString(
    <StaticRouter location={req.url}>
      <App />
    </StaticRouter>
  );

  res.send(`
        <!DOCTYPE html>
        <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
            </head>
            <body>
                <div id='app'>${jsx}</div>
                <script src="http://localhost:8080/client/bundle.js"></script>
            </body>
        </html>
    `);
});

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}`);
});
