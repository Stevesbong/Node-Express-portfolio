const express = require('express');
const data = require('./data.json');
const path = require('path');
const app = express();
// console.log(data)
// console.log(path.dirname)

require('./routes')(app);

app.use('/static', express.static('public'));
app.set('view engine', 'pug');

// app.use( (req, res, next) => {
//     const err = new Error('Not found');
//     err.status = 404;
//     next(err)
// })

// app.use( (err, req, res, next) => {
//     res.locals.error = err;
//     const status = err.status || 500;
//     res.status(status);
//     res.render('error')
// })

app.listen('3000', () => {
    console.log('listening port 3000 . . . ');
})