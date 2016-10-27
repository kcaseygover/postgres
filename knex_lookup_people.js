const settings = require("./settings"); // settings.json
const pg = require('pg');

const knex = require("knex") ({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database,
    ssl: settings.ssl
  }
})

var last_name = process.argv[2]

knex.select('*').from('famous_people').then([last_name], function(data) {

  console.log('result')
});
