const TABLE = 'article';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(TABLE);
    }

    function insert(body) {
        return store.insert(TABLE, body);
    }

    function update(body) {
        return store.update(TABLE, body);
    }

    function remove(body) {
        return store.remove(TABLE, body);
    }


    return {
        list,
        insert,
        update,
        remove
    };
} 