const { userMocks } = require('../utils/mocks/userMock');


const db = {
    'user': userMocks
};

async function list(table) {
    return db[table];
}

async function get(table, id) {
    let col = list(table);
    return col.filter(item => item.id === id)[0] || null;
}

async function insert(table, data) {
    db[table].push(data);
}

async function update(table, data) {
    db[table].push(data);
}

async function remove(table, id) {
    return true;
}

module.exports = {
    list,
    get,
    insert,
    update,
    remove,
};