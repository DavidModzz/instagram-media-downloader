const igdown = require('./index.js');

igdl('https://www.instagram.com/reel/CpG_5lqDJsh/')
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });