const build = require('./app');

const app = build();
app.listen(3000, function (err, address) {
  if(err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`server running on port ${address}`);
});
module.exports = app;
