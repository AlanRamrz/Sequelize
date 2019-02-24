const Sequelize = require('sequelize')
const db = require('../config/database.js')

const Gig = db.define('gig', {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true
    },
    name: Sequelize.STRING
  },
  {
    freezeTableName: true,
    timestamps: false
  }
)

module.exports = Gig