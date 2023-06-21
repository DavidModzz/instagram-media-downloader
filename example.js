const igdown = require('./index.js');

igdown('https://www.instagram.com/reel/CteTr7sswrJ')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });