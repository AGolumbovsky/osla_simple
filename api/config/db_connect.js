const { Pool } = require('pg');

const connectionString = "postgres://postgres:pgsuper@localhost/osla";

const pool = new Pool({
        connectionString: connectionString
    });

module.exports = pool;