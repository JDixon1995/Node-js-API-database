const app = require('./app');
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const server = app.listen(port, () => {
    console.log('Express server listening on port ' + port);
});