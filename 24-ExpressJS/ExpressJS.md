# Creating Our First Server with Express
## Introduction to Express Server

In this lesson, we are going to build our very own Express server using Express and Node.js. To recall, the backend refers to the server, which is simply any computer, often a powerful one that is on 24/7, always listening for requests. These requests look for particular resources such as HTML files, CSS, JavaScript, and so forth.

The backend also consists of an application written in code running on the server computer. This could be as simple as an index.js file on the server. Additionally, more complex backends usually include a database to store user or company data. However, a simple backend can just be an application running on a server computer. All these components together form what we usually think of as a website backend.

When a client, typically a user trying to access your website, sends a request via the internet, it reaches your server computer. For example, if they type in google.com, the request goes to Google's servers somewhere in the world. On that server, an application listens for this request and, once found, sends back the homepage, such as index.html, CSS, or JavaScript files. This response is sent back to the client. This is the fundamental role of our server.

You will often hear the terms Client-Side and Server-Side. The Client-Side, or front-end, is the side the user interacts with. The Server-Side refers to everything on the backend. Sometimes, people refer to the backend simply as the server. Today, we will build our server using Express.js, creating a JavaScript application using Express and Node. Express uses Node internally so we do not have to interact directly with Node's complex code. We will use our local computer as the server.

Servers are usually on 24/7, but for our purposes, our computer will be on only when we want to test and make requests to the server to retrieve website data. It just needs to be listening for requests when they come through.

## Steps to Create an Express Server
There are six steps to creating an Express server:

1. Create a directory (folder) for the project files
2. Create a JavaScript file named index.js inside that folder.
3. Initialize NPM to install the Express package into the directory.
4. Use the Express package to write an application in JavaScript inside index.js.
5. Start the server.
6. Send requests to the server and observe the responses.
Let's go through these steps together.

## Step 1: Create a New Directory
Open VS Code and open your Web Development Project folder. If you do not have it open, go to File > Open Folder and select it. Inside this folder, create a new directory for your Express Server project. For example, inside a Backend folder, use the terminal with the cd command to navigate to the Backend folder, then use mkdir "3.1 Express Server" to create the new directory. Use quotes to avoid issues with spaces in the directory name. Then cd into the new directory.

## Step 2: Create index.js File
Create a new file named index.js inside your project directory. In the terminal, use the command touch index.js to create this file. You should now see index.js inside your project folder.

## Step 3: Initialize NPM and Install Express
Initialize NPM in your project folder by running npm init -y in the terminal. This creates a package.json file with default values. Ensure the main entry is set to index.js. Then install Express by running npm i express. This installs Express and creates a node_modules folder with dependencies. Your package.json will list Express as a dependency.

## Step 4: Configure ES6 Module Syntax
To use the latest ES6 syntax, add the line "type": "module" to your package.json file. This allows you to use import statements in your JavaScript files.

## Step 5: Write the Server Application
In index.js, write the following code to create your Express server:

```javascript
import express from 'express';

const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server running on port ${port}.`);
});
```

This code imports Express, creates an app instance, sets the port to 3000, and starts the server listening on that port. When the server starts, it logs a message indicating it is running.

## Step 6: Start the Server
In the terminal, run the server using the command node index.js. You should see the message "Server running on port 3000." indicating the server is active.

## Accessing the Server
To access your server, open a browser and navigate to **http://localhost:3000**. Localhost refers to your own computer hosting the server locally. The port number 3000 specifies the door through which the server listens for requests. Each port acts like a door with a unique address, allowing multiple services to run on the same computer without interference.

Your computer can have thousands of ports, each serving different applications or hardware. For example, your printer or remote control software might use specific ports. This system allows multiple services to operate simultaneously without conflict.

You can check which ports are currently listening on your computer by running the following commands in the terminal:

- On Mac: **sudo lsof -i -P -n | grep LISTEN**
- On Windows: **netstat -ano | findstr "LISTENING"**
The pipe symbol (|) is used to pass the output of one command as input to another. It is located on most keyboards, often below the Escape key.

If your terminal is occupied by the running server, you can stop it by pressing Ctrl + C. Alternatively, open a new terminal window to run other commands without stopping the server.

## Troubleshooting
When accessing http://localhost:3000, you might see an error message "Cannot GET /". This means the server does not have a route defined for the root URL. In the next lesson, we will discuss what "GET" means, how to make requests, and how to ensure the server responds correctly without 404 errors.

## Key Takeaways
- We built a basic Express server using Node.js and JavaScript.
- The server listens on a specified port (3000) for incoming client requests.
- Localhost refers to hosting the server on our own computer, accessible via a specific port.
- Ports act as doors on a server, allowing multiple services to run simultaneously without interference.