const { MongoClient } = require("mongodb");

const config = require('../config');


const dbconf = {
    host: config.mongodb.host,
    user: config.mongodb.user,
    password: config.mongodb.password,
    dbName: config.mongodb.database,
};



async function handleConnection(){
    const uri = `mongodb+srv://${dbconf.user}:${dbconf.password}@${dbconf.host}/${dbconf.dbName}.net.test?retryWrites=true&w=majority`;
    const client = new MongoClient(uri, {useNewUrlParser: true, useUnifiedTopology: true });
    try{
        await client.connect(
            client,

        );
        console.log('connected')
        // await listDatabases(client);
        await insert(
            client,
            'user',
            {
                name: "Blah",
                avatar: "www.blah.com",
            });
    } catch(e){
        console.error(e);
    } finally {
        await client.close();
    }
}

handleConnection().catch(console.err);

async function insert(client,coll, data){
    const result = await client.db(dbconf.dbName).collection(coll);
}

async function listDatabases(client){
    const databasesList = await client.db(dbconf.dbName).admin().listDatabases();

    console.log("Databases:");
    databasesList.databases.forEach(db => console.log(` - ${db.name}`))
}



// const dbConnectionUrl = "CONNECTION_STRING_FROM_ATLAS";

// function initialize(
//     dbName,
//     dbCollectionName,
//     successCallback,
//     failureCallback
// ) {
//     MongoClient.connect(dbConnectionUrl, function(err, dbInstance) {
//         if (err) {
//             console.log(`[MongoDB connection] ERROR: ${err}`);
//             failureCallback(err); // this should be "caught" by the calling function
//         } else {
//             const dbObject = dbInstance.db(dbName);
//             const dbCollection = dbObject.collection(dbCollectionName);
//             console.log("[MongoDB connection] SUCCESS");

//             successCallback(dbCollection);
//         }
//     });
// }

// module.exports = {
//     initialize
// };