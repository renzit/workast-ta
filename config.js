module.exports = {
    api: {
        port: process.env.API_PORT || 3000,
    },
    mongodb: {
        host: process.env.MONGODB_HOST || 'cluster0-nsjuy.mongodb.net',
        user: process.env.MONGODB_USER || 'db_user_workast',
        password: process.env.MONGODB_PASS || 'V1agQO0go3tkZFJf',
        database: process.env.MONGODB_DBNAME || 'workast_ta_db',
    }
} 