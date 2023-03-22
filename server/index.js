require("dotenv").config();
const express = require("express");
const cors = require("cors");
const path = require("path");
const contactRoute = require('./route/contactRoute2');

const app = express();

//creating the middleware
app.use(express.json());
app.use(cors());

app.use( "/", contactRoute );

//probablemente hay que borrar

// if( process.env.NODE_ENV = "production") {
//     app.use(express.static("react-portfolio/build"));
//     app.get( "*", ( req, res  ) => (
//         res.sendFile(path.resolve(__dirname, "react-portfolio", "build", "index.html"))
//     ));
// }

// borrar hasta aquí

const port = process.env.PORT || 5000;
app.listen( port, console.log(`server running on port ${port} only`));
