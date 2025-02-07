const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');

const guestRouters = require('./routes/guestRouter');
const accusationRouters = require('./routes/AccusationRouter');

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));

app.use('/api', guestRouters);
app.use('/api', accusationRouters);

app.listen(3000,() => {
  console.log("Server running on port 3000");
});
