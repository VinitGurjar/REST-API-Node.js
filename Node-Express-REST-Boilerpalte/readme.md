### To build a REST API for Node.js, you can follow these steps:

1. Set up your Node.js environment and install the necessary dependencies. You can use tools like NPM (Node Package Manager) or Yarn to manage your dependencies.

1. Define the resources that your API will expose. These resources can be represented as endpoints with corresponding HTTP methods (e.g., GET, POST, PUT, DELETE).

1. Use a web framework like Express to handle incoming HTTP requests and route them to the appropriate endpoint.

1. Define the functions that will handle each endpoint. These functions should perform the necessary actions (e.g., querying a database) and return a response with the appropriate status code and data.

1. Use middleware to add functionality to your API, such as authentication, validation, or error handling.

1. Test your API using tools like Postman or curl to ensure that it works as expected.

> In the code, we define three endpoints: a GET endpoint for the root URL, a GET endpoint for a specific user ID, and a POST endpoint for creating a new user. We use the express library to define the endpoints and handle incoming HTTP requests. When a request is received, the appropriate endpoint function is called, which performs the necessary actions and returns a response with the appropriate status code and data.

`Note` that this is just a simple example, and you may need to add more complexity to your API depending on your use case.
