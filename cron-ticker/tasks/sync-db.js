let times = 0;

const syncDB = () => {
    times++;
    console.log('Tick cada segundo ', times);

    return times;
};

module.exports = {
    syncDB
}