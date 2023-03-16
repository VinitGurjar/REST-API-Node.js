//Code for our rest api
//importing express which is also a function
const app = require("express")();
const PORT = 8080;

//creating an endpoint
app.get(
  "/some" /*ROUTE*/,
  (req, res) => {
    res.status(200).send({
      some: "yo",
      where: "there",
    });
  } /*HANDLER*/
);
