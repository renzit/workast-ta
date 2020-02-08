
const COLLECTION = 'article';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function list() {
        return store.list(COLLECTION);
    }

    async function insert(body) {
        return store.insert(COLLECTION, body);
    }

    function update(body) {
        return store.update(COLLECTION, body);
    }

    function remove(body) {
        return store.remove(COLLECTION, body);
    }


    return {
        list,
        insert,
        update,
        remove
    };
} 