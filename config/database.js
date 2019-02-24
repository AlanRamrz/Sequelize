const Sequelize = require('sequelize')

const db = new Sequelize('db', 'user', 'password', {
    host: 'url',
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    },
    operatorsAliases: false
})

db.authenticate()
.then(() => {
    console.log('Database connected')
})
.catch(error => {
    console.log('Error: ' + error)
})

module.exports = db