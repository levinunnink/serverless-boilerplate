
exports.handle = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // eslint-disable-line 

  console.log('Hello deferred functions and serverless world', event); // eslint-disable-line 

  callback();
};
