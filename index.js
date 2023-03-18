//Code for our rest api
//importing express which is also a function
//Refactoring the code after writing the endpoints
const express = require("express");
const app = express();
const PORT = 8080;

//Implementing the middleware express.josn which will convert the body to json
app.use(express.json());

//Defined a port for on server to listen our API
app.listen(PORT, () => console.log(`he's alive on http://localhost:${PORT}`));

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

//Post Endpoint with a Route parameters for capturing synamic values in the URL
//For the user to create new data
app.post("/some/:id ", (req, res) => {
  const { id } = req.params;
  const { logo } = req.body;

  if (!logo) {
    res.status(404).send({ Message: "Logo is imp! " });
  }

  res.send({
    some: `context with your ${logo} and ID of ${id}`,
  });
});

//Now Express does not parse the body of request by defualt.
//So we have to set a middelware that tell express to parse json
