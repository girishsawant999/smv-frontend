const express = require('express');
const app = express();

const landing = require('./landing');

app.use('/api/v1/ums/landing', landing);

app.listen(44444, () => {
  console.log('Api Mock service is listening on port 44444');
});
