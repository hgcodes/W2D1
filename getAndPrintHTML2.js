var https = require('https');

function getAndPrintHTML(options) {
var emptyStream = "";

https.get(options, function (response) {

  // set encoding of received data to UTF-8
  response.setEncoding('utf8');

  // the callback is invoked when a `data` chunk is received
  response.on('data', function (data) {
    console.log('Chunk Received. Length:' + data + "\n");
    emptyStream += data;
  });

  // the callback is invoked when all of the data has been received
  // (the `end` of the stream)
  response.on('end', function() {
    console.log('Response stream complete.');
  });

});

}

getAndPrintHTML({
  host: 'sytantris.github.io',
  path: '/http-examples/step2.html'
});