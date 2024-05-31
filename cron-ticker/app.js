const cron = require('node-cron');
const { syncDB } = require('./tasks/sync-db');

console.log("Hola Mundo - iguana");

cron.schedule('1-59 * * * * *', syncDB);