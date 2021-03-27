const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());

const countryInfo = require('./countryInfo/index');
const country = require('./countries/index');
const landing = require('./landing');

app.use('/api/v1/ums/landing', landing);
app.use('/api/v1/ums/country', countryInfo);
app.use('/api/v1/ums/countries', country);

const port = process.env.PORT ? process.env.PORT : 44444;
app.listen(port, () => {
	console.log(`Api Mock service is listening on port ${port}`);
});
