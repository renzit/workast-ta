const { userMocks } = require('../utils/mocks/userMock');
const { articleMocks }= require('../utils/mocks/articleMocks');


const db = {
    'user': userMocks,
    'article': articleMocks

};

async function list(table) {
    return db[table];
}

async function get(table, id) {
    let col = list(table);
    console.log(db);
    return col.filter(item => item.id === id)[0] || null;
}

async function insert(table, data) {
    db[table].push(data);
    console.log(db);
}

async function update(table, data) {
    db[table].push(data);
    console.log(db);
}

async function remove(table, id) {
    let list = db[table];
    let index = list.findIndex(elem => elem.id == id.id);
    if (index !== -1){
        list.splice(index, 1);
    }

    return true;
}

module.exports = {
    list,
    get,
    insert,
    update,
    remove,
};