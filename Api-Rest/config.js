module.exports = {
    port: process.env.PORT || 3001,
    db: process.env.MONGODB_URL || 'mongodb://localhost:27017/biblioteca',
    SECRET_TOKEN: 'miclavedetokens'
}