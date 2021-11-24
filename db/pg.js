import pg from 'pg';

const { Pool } = pg;

const connectionString = 'postgres://awpbgyih:06RCQJlz84n8y4gX42KGK_HVSptRmZkZ@tai.db.elephantsql.com/awpbgyih'
const pool = new Pool({ connectionString });

export default pool;

