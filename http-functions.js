var https = require('https');

module.exports = function getHTML (options, callback) {

  var html = "";

  https.get(options, function (response) {

    response.setEncoding('utf8');

    response.on('data', function (data) {
      console.log('Chunk Received. Length:' + data + "\n");
      html += data;
    });

    response.on('end', function() {
      console.log('Response stream complete.');
    });

  });

}

