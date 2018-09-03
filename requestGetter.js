const request = require('request');
const fs = require('fs');

let url = 'https://sytantris.github.io/http-examples/future.jpg'

request.get(url)
  .on('error', (err) => {
    console.error(err);
  })
  .on('response', (response) => {
    console.log(`Response code: ${response.statusCode}\nResponse message: ${response.statusMessage}\nContent type: ${response.headers['content-type']}`);
    console.log('Downloading img...');
  })
  .pipe(fs.createWriteStream('./future.jpg'))
  .on('finish', () => {
    console.log('Download complete!');
  });