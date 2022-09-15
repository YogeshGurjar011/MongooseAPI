const mysql = require("mysql");
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "test"
});

// connection.query((err)=>{
//     if(err){
//         console.log("error")
//     }
// });

module.exports = connection;