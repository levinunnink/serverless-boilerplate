
exports.handle = (event, context, callback) => {
  context.callbackWaitsForEmptyEventLoop = false; // eslint-disable-line 

  console.log('Something scheduled', event); // eslint-disable-line 

  callback();
};
