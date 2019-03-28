const awsServerlessExpress = require('aws-serverless-express');
const app = require('./app');

const binaryMimeTypes = [
  'application/javascript',
  'application/json',
  'application/octet-stream',
  'application/xml',
  'application/x-font-ttf',
  'application/font-woff2',
  'application/font-woff',
  'font/eot',
  'font/opentype',
  'font/otf',
  'font/ttf',
  'font/woff',
  'font/woff2',
  'image/jpeg',
  'image/png',
  'image/svg+xml',
  'text/comma-separated-values',
  'text/css',
  'text/html',
  'text/javascript',
  'text/plain',
  'text/text',
  'text/xml',
];

process.on('unhandledRejection', (reason) => {
  console.log('Unhandled Rejection at:', reason);
  // Recommended: send the information to sentry.io
  // or whatever crash reporting service you use
});

process.on('uncaughtException', (err) => {
  console.log('Uncaught exception', err);
});

const server = awsServerlessExpress.createServer(app, null, binaryMimeTypes);

exports.handle = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // eslint-disable-line 

  const fakeContext = {
    succeed: res => callback(null, res),
  };

  awsServerlessExpress.proxy(server, event, fakeContext);
};
