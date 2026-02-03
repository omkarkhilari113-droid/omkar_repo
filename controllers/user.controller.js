const db = require("../db");
//Post
const createUser =(req, res) => {
  const { name, age, email } = req.body;

  if(typeof name !=='string'){
    return res.status(400).send("Name must be a string");
  }
  if (typeof age !=='number' || age<=0){
    return res.status(400).send("Age must be a positive number");
  }
  if (typeof email !=='string' || !email.includes("@")){
    return res.status(400).send("Invalid email format");
  }

  const insertQuery =
    "INSERT INTO employees (name, age, email) VALUES ($1, $2, $3)";
db.pool.query(insertQuery, [name, age, email], (err) => {
    if (err) {
      console.log(err.message);
      return res.status(500).send("Insert failed");
    }
    res.send("User inserted successfully");
  });
};

// Put
const updateUser =(req, res) => {
  const { id } = req.query;  //take in req.params
  const { name, age, email } = req.body;
  {
    if(typeof name !=='string'){
      return res.status(400).send("Name must be a string");
    }
    if (typeof age !=='number' || age<=0){
      return res.status(400).send("Age must be a positive number");
    }
    if (typeof email !=='string' || !email.includes("@")){
      return res.status(400).send("Invalid email format");
    }
    const updateQuery =
    "UPDATE employees SET name=$1, age=$2, email=$3 WHERE id=$4";
    };
   db.pool.query(updateQuery, [name, age, email, id], (err) => {
       if (err) {
         console.log(err.message);
         return res.status(500).send("Update failed");
       }
       res.send("User updated successfully");
     });
   };
  
// Patch

const patchUser =(req, res) => {
  const { id } = req.params;
  const { name, age, email } = req.body;
  {
    if(typeof name !=='string'){
      return res.status(400).send("Name must be a string");
    }           
    if (typeof age !=='number' || age<=0){
      return res.status(400).send("Age must be a positive number");
    }
    if (typeof email !=='string' || !email.includes("@")){
      return res.status(400).send("Invalid email format");
    }
  }

  const patchQuery =
    "UPDATE employees SET name=$1, age=$2, email=$3 WHERE id=$4";
    db.pool.query(patchQuery, [name, age, email, id], (err) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send("Patch failed");
        }
        res.send("User partially updated");
      });
    };

// Delete
    const deleteUser =(req, res) => {
  const { id } = req.params;
  const deleteQuery = "DELETE FROM employees WHERE id=$1";
    db.pool.query(deleteQuery, [id], (err) => {
        if (err) {
          console.log(err.message);
          return res.status(500).send("Delete failed");
        }
        res.send("User deleted successfully");
      });
    };

// Get All Users
    const getAllUsers =(req, res) => {
      
        const getAllQuery = "SELECT * FROM employees";
        db.pool.query(getAllQuery, (err, results) => {
          if (err) {
            console.log(err.message);
            return res.status(500).send("Failed to retrieve employees");
          }
          res.json(results.rows);
        });
      }
        module.exports = {
          createUser,
          updateUser, 
          patchUser,
          deleteUser,
          getAllUsers
        };
      