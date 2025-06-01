/** Database connection for messagely. */


const { Client } = require("pg");
const { DB_URI } = require("./config");

const client = new Client(DB_URI);

client.connect()
    .then(() => console.log("Connected to DB"))
    .catch(err => {
        console.error("Connection to DB failed, error:", err.stack);
        process.exit(1);
    });


module.exports = client;
