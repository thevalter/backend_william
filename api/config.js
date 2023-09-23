const dotenv = require('dotenv')

dotenv.config();

const Pool = require('pg');
const pool = new Pool.Client(process.env.DB_URL);

pool.connect();

module.exports = pool;

