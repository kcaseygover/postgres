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

var first_name = process.argv[2]
var last_name = process.argv[3]
var birthdate = process.argv[4]

knex('famous_people').insert([{first_name:'Karen'}, {last_name:'Gover'}, {birthdate:'1983/04/13'}])
  .then( (result) => {
    console.log('result: ' + result);
  })