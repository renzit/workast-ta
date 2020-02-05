const TABLE = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function insert(body) {
        return store.insert(TABLE, body);
    }

    function update(body) {
        return store.update(TABLE, body);
    }


    return {
        insert,
        update,
    };
} 