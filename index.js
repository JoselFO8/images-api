// const server = require('./src/config/app');
// const { conn } = require('./src/config/db.js');
const server = require('./src/app.js');
const { conn } = require('./src/db.js');

conn.sync({ force: false }).then(() => {
    server.listen(3001, () => {
        console.log('%s listening at 3001');
    });
});