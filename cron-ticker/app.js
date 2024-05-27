const cron = require('node-cron');

let times = 0;

cron.schedule('1-59 * * * * *', () => {
    times++;
    console.log('Tick cada segundo ', times);
});

console.log("Hola Mundo - iguana");