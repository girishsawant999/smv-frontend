const express = require('express');
const app = express();
const country = require('./country/index');

app.use('/api/v1/ums/country', country);

app.listen(44444, () => {
  console.log('Api Mock service is listening on port 44444');
});
