const { Sequelize } = require('sequelize');

const sequelize = new Sequelize({
  database: 'login_registration', // Your database name
  username: 'ali2005',            // Your database username
  password: '123321',             // Your database password
  host: 'localhost',              // Your database host
  dialect: 'postgres',            // The dialect of your database, e.g., 'mysql', 'postgres', 'sqlite', etc.
});

module.exports = sequelize;
