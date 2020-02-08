const COLLECTION = 'user';

module.exports = function (injectedStore) {
    let store = injectedStore;
    if (!store) {
        store = require('../../../store/dummy');
    }

    function insert(body) {
        const user = {
            name: body.name,
            avatar: body.avatar
        }
        console.log(user);
        return store.insert(COLLECTION, body);
    }


    return {
        insert,
    };
} 