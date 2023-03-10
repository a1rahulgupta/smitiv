const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.json())
require("./config/db.js")(app);
require('./app/routeHandler')(app)
app.get('/', (req, res) => {
    res.json({
        message: 'Welcome Smitiv Test'
    });
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Application is running on ${port}`);
});