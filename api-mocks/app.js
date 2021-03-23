const express = require('express');
const app = express();

const countryInfo = require('./countryInfo/index');
const country = require('./countries/index');
const landing = require('./landing');

app.use('/api/v1/ums/landing', landing);
app.use('/api/v1/ums/country', countryInfo);
app.use('/api/v1/ums/countries', country);

app.listen(44444, () => {
  console.log('Api Mock service is listening on port 44444');
});
