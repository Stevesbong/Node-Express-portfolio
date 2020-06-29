// REQUIRE EXPRESS AND PATH
const express = require('express');
const path = require('path');


// INSTANTIATE EXPRESS APP
const app = express();


// IMPORT ROUTE DEFINITION
require('./routes')(app);


// SETUP VIEW ENGINE
app.set('view engine', 'pug');


// STATIC MIDDLEWARE FOR SERVING STATIC FILES
app.use('/static', express.static(path.join(__dirname, 'public')));


// 404 ERROR HANDLER
app.use( (req, res, next) => {
    console.log('404 error handler called');
    const err = new Error();
    err.status = 404;
    res.status(404).render('not-found', {err})
})


// GLOBAL ERROR HANDLER
app.use( (err, req, res, next) => {
    if (err) {
        console.log('Global error handler called', err);
    }

    if (err.status === 404) {
        res.status(404).render('error', { err } )
    } else {
        err.message = err.message || 'Oops! It looks like someting went wrong'
        res.status(err.status || 500).render('error', { err })
    }
})

app.listen('3000', () => {
    console.log('listening port 3000 . . . ');
})