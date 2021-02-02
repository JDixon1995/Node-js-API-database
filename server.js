const app = require('./app');
const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';
const server = app.listen(PORT, () => {
    console.log('Express server listening on port ' + PORT);
});