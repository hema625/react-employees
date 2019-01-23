const express = require('express')
const cors = require('cors')
const app = express()
const employees = require('./data/employees.json');
const bodyParser = require("body-parser");
const db = require("./queries");
const mo = require("method-override");

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200
}
app.use(mo("_method"));
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());


app.get("/",(req,res)=>{
  res.json({ stack : "Node.js,Express, React and PostgreSQL"});
})

app.get("/api/employees",cors(corsOptions),db.getAll);

app.post("/api/employees",cors(corsOptions),db.createEmp);

app.put("/api/employees/:id",cors(corsOptions),db.updateUser);

app.delete("/api/employees/:id",cors(corsOptions),db.deleteUser);

// app.get('/api/employees', cors(corsOptions), (req, res, next) => {
//   console.log('/api/employees');
//   res.setHeader('Content-Type', 'application/json');
//   res.status(200);
//   res.send(JSON.stringify(employees, null, 2));
// })

app.listen(8080, () => console.log('Job Dispatch API running on port 8080!'))