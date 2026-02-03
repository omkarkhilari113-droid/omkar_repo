const {Pool}=require('pg'); 
const pool=new Pool({
    host:"localhost",
    user:"postgres",
    port:5432,
    password:"Staff@123",
    database:"postgres"
});
pool.query("SELECT 1")
  .then(() => console.log("PostgreSQL connected"))
  .catch(err => console.error("DB connection error:", err.message));

exports.pool=pool;
 
