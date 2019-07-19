// creating a simple express server to serve our React JS application.
const express = require('express');  // node way to import something
const path = require('path');

const app = new express();

const publicPath = path.join(__dirname, '..', 'public');

const port = process.env.PORT || 8080;

// where are files live and which port!
app.use(express.static(publicPath));  // register the middleware!

// get a request to server!  * for all match route!
app.get('*', (req, res, next) => {
    // send back the index.html
    res.sendFile(path.join(publicPath,'index.html'));
})

app.listen(port, () => {
    console.log(`Server is up in ${port}` )
})

