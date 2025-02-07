const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const fileUpload = require('express-fileupload');

const guestRouters = require('./routes/guestRouter');
const accusationRouters = require('./routes/AccusationRouter');
const roomRouters = require('./routes/roomRouter');

app.use(bodyParser.json());
app.use(cors({ origin: '*' }));
app.use(fileUpload());

app.use('/api', guestRouters);
app.use('/api', accusationRouters);
app.use('/api', roomRouters);

// app.use("/downloads", express.static("downloads"));

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
