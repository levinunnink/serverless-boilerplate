const express = require('express');

const app = express();

app.use(express.static('public', { maxage: '14d' }));
app.get('*', (req, res) => {
  res.send(`
    <html>
    <head>
      <title>Serverless Boilerplate</title>
      <script src="/js/main.js"></script>    
      <link rel="stylesheet" href="/css/public.css" type="text/css" />
    </head>
    <body>
      <div>
        <img src="/img/serverless.svg" alt="Serverless" />
        <p>Boilerplate up and running. Written by <a href="https://nunn.ink">Levi Nunnink</a>.</p>
      </div>
    </body>
    </html>
  `);
});

module.exports = app;
