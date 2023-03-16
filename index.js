//Code for our rest api
//importing express which is also a function
const app = require("express")();
const PORT = 8080;

//calling api to listen for the port
app.listen(PORT, () => console.log(`it's alive on http://localhost:${PORT} `));
