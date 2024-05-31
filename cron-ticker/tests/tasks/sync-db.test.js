const { syncDB } = require("../../tasks/sync-db");

describe('Pruebas en Sync-DB', () => {

    test('Se debe ejecutar el proceso dos veces', () => {

        syncDB();
        const times = syncDB();
        console.log('Se llamó: ', times);

        expect(times).toBe(2);

    });

});