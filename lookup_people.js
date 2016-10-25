const pg = require("pg");
const settings = require("./settings"); // settings.json

var last_name = process.argv[2]

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl
});
let query = "SELECT * FROM famous_people WHERE last_name = $1;";

client.connect((err) => {
  if (err) {
    return console.error("Connection Error", err);
  }

  client.query(query, [last_name], (err, result) => {
    if (err) {
      return console.error("error running query", err);

    }
  console.log(result.rows);
  client.end();
  });

});
