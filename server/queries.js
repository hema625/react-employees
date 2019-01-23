const pg = require("pg");
const color = require('css-color-converter');

const pool = new pg.Pool({
    user : 'me',
    host : 'localhost',
    database : 'api',
    password : 'password',
    port : 5432
});

const getAll = (req,res) =>{
    pool.query('SELECT * FROM employees order by id',(error,results)=>{
        if(error) {
            console.log(error);
        }
        else {
            res.status(200).json(results.rows);
        }
    })
};

const createEmp = (req,res)=>{
  const {name,code,profession,color,city,branch,assigned} = req.body;
   pool.query('INSERT INTO employees(name,code,profession,color,city,branch,assigned)' +
     'values($1,$2,$3,$4,$5,$6,$7)', [name,code,profession,color,city,branch,assigned],(err,results)=>{
          if(err) {
              console.log(err);
          }
          else {
               res.status(201).send(`User added with ID: ${results.insertId}`)
            // res.status(200).json(results.rows);
          }
    })
};

const updateUser = (req,res)=>{
    const id = parseInt(req.params.id);
    const {name,code,profession,color,city,branch,assigned} = req.body;
pool.query('UPDATE employees SET name = $2,code = $3,profession = $4,color = $5,city = $6,branch = $7,' +
    'assigned = $8 WHERE id = $1',[id,name,code,profession,color,city,branch,assigned],(err,results)=>{
        if(err){
            console.log(err);
        }
        else {
            res.status(200).send(`User modified with ID: ${id}`)
        }
    })
};

const deleteUser = (req,res) =>{
    const id = parseInt(req.params.id);
    pool.query('DELETE FROM employees WHERE id = $1',[id],(err,results)=>{
        if(err){
            console.log(err);
        }
        else {
            res.status(200).send(`User deleted with ID: ${id}`)
            // res.status(200).json(results.rows);
        }
    })
};


module.exports = {
    getAll,
    createEmp,
    updateUser,
    deleteUser
}