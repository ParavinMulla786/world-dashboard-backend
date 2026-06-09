const express =require("express");

const dotenv= require("dotenv");
dotenv.config();

const app = express();

app.use(express.json());
 const dashboardroutes= require("./routes/dashboardroutes");
 app.use("api/dashboarrd", dashboardroutes);

 const port = process.enn.port || 5000;

 app.listen(port, ()=> {
    console.log(`Server os runnine on port ${PORT}`);
 });