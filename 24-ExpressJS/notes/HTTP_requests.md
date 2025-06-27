# HTTP Requests and Building a Node Server with Express
## Introduction to HTTP Requests
In this lesson, we are learning all about HTTP requests and the language that allows you to make requests to your Node server.

## What is HTTP?
HTTP stands for HyperText Transfer Protocol. The first part, HyperText, is similar to HTML, which stands for HyperText Markup Language. The Transfer Protocol describes HTTP as a language that allows computers to communicate with each other across the Internet.

As humans, we use language to transfer thoughts between each other. For computers, HTTP is the language that allows them to understand each other over the Internet.

## Basic Vocabulary of HTTP
Just as you would learn a few words when visiting a new country, it is important to learn the basic vocabulary of HTTP. There are five main words you will encounter: GET, POST, PUT, PATCH, and DELETE.

## GET
GET is used when you want to request a resource from the server. This could be an HTML website, a piece of text, or data from a database. When you make an HTTP request using GET, you are retrieving something from the server.

## POST
POST is used when you want to send a resource to the server. For example, when a user signs up on your website, their email and password are sent to your server using a POST request. The server can then process or save this information.

## PUT and PATCH
PUT and PATCH are both update methods, but they work differently. A PUT request replaces a resource entirely with the new data you send. PATCH, on the other hand, is used to update part of a resource, similar to patching up a broken item.

A helpful analogy is an Amazon return: if you receive a broken bicycle, Amazon can either send you a new bicycle (PUT) or just the broken wheel (PATCH).

## DELETE
DELETE is straightforward; it deletes resources from the server or database. This is a request from the client to the server to remove something.

With these five words, you can navigate the world of HTTP requests.

## Setting Up a Node and Express Server
Let us look at a real example. Here, a server is created using Node and Express, running on port 3000. When you try to load the website at localhost:3000, you may get an error saying "Cannot GET." This means the server does not yet have code to handle GET requests for the root path.

To fix this, you need to add code that tells the server what to do when a user tries to access the home page.

The forward slash (/) at the end of the address represents the home page. When you load localhost:3000 or localhost:3000/, it is making a GET request to the root.

Now, by adding the Express GET method, the server knows how to respond to a GET request at the root. Inside the anonymous function, you can define how the server responds, such as sending the words "Hello World."

When you load the home page at localhost:3000 with this updated code, you will see "Hello World" in the browser.

## Exercise: Setting Up Your Server
Repeat the process from the previous lesson to set up a new server using Node and Express. The steps are listed out for you to follow:

1. Create a new folder in your Backend module called 3.2 HTTP Requests.
2. Create an index.js file inside the folder.
3. Initialize NPM in the project folder.
4. Install Express using npm.
5. Import Express and set up your app.
6. Start your server and listen on port 3000.

You do not need to write the GET request yet, just get your server up and running.

## Initializing the Project and Installing Express

```basic
mkdir 3.2-HTTP-Requests
cd 3.2-HTTP-Requests
npm init -y
npm i express
```

## Writing the Server Code
Import Express, create the app, and start listening on port 3000. Remember to set the type to module in package.json if you want to use ES6 imports.

```javascript
import express from "express";
const app = express();
const port = 3000;
app.listen(port, function() {
  console.log("Server has started on port " + port);
});
```
Run your server using Node and your index.js file. If you see the message that the server has started, your setup is correct.

```bash
node index.js
```

If you get the error "Cannot GET /", it means your server does not yet handle GET requests for the root path.

## Handling GET Requests with Express
To handle GET requests to the root path, use the app.get() method from Express.

```javascript
app.get("/", function(req, res) {
  res.send("Hello World");
});
```
Now, when you visit localhost:3000, you will see "Hello World" displayed.

## Inspecting the Request Object
You can log the request parameter to see what the browser sends to your server.

```javascript
app.get("/", function(req, res) {
  console.log(req);
  res.send("Hello World");
});
```

If you want to narrow down the information, you can log req.rawHeaders to see the raw headers sent with the request.

```javascript
app.get("/", function(req, res) {
  console.log(req.rawHeaders);
  res.send("Hello World");
});
```

## Sending Responses
To send a response back to the client, use res.send(). You can send plain text or fully formatted HTML.

```javascript
app.get("/", function(req, res) {
  res.send("<h1>Hello</h1>");
});
```

## Using Nodemon for Automatic Restarts
Every time you change server-side code, you need to stop and restart your server. This can be tedious. Nodemon is a tool that automatically restarts your Node application when it detects file changes.

```bash
npm install -g nodemon
```

After installing, run your server with Nodemon instead of Node:

```bash
nodemon index.js
```
Now, Nodemon will monitor your files and automatically restart the server when changes are detected.

## Understanding Endpoints
Endpoints are like destinations for your HTTP requests. For example, /about or /contact are different endpoints you can define in your server.

To handle multiple endpoints, add more app.get() methods for each path.

```javascript
app.get("/about", function(req, res) {
  res.send("<h1>About me.</h1><p>My name is Angela.</p>");
});

app.get("/contact", function(req, res) {
  res.send("<h1>Contact me</h1><p>+44123456789</p>");
});
```
Now, when you visit localhost:3000/about or localhost:3000/contact, you will see the respective pages.

This demonstrates how you can use different endpoints to build multi-page websites and navigation in your web apps using Node and Express.

## Conclusion
In the next lesson, we will learn more about different types of HTTP requests and how to use Middleware with Express.

## Key Takeaways
- HTTP stands for HyperText Transfer Protocol and is the language computers use to communicate over the Internet.
- The five main HTTP request methods are GET, POST, PUT, PATCH, and DELETE, each serving a specific purpose.
- Express.js allows you to handle different HTTP requests and endpoints easily when building a Node server.
- Nodemon is a useful tool for automatically restarting your server when code changes are detected.