# How to Use the Native Node Modules
In the last lesson, a very basic Node application was created that simply logged a bit of text to the console. In this lesson, the focus is on using Native Node Modules, which allow leveraging existing code built into Node, making it much more powerful than what can be achieved with just JavaScript.

## What Are Native Node Modules?
Native Node modules are like your starting tool set. Node includes a variety of features built in to make it easier to create applications, especially on the server side. This includes things such as file access (reading and writing to the local file system) and networking (to reach across the internet and carry out backend functionality), among many others.

You can think of these native modules as similar to the games that come pre-bundled with your operating system. For example, Minesweeper, Pinball, Hearts, and Solitaire on Windows. While you can install more games, the native ones are pre-bundled because they are considered useful.

## Accessing Documentation
In the course resources for this lesson, there is a link to the documentation page for all native modules. There are many modules, and it is not practical to go through each one individually. The documentation serves as a dictionary, and some modules such as HTTP and Path will be used in the future. For now, the focus is on the File System module.

## The File System Module
With native JavaScript running in a browser, you cannot access a user's files on their computer for security reasons. However, Node.js allows JavaScript to run outside the browser, enabling access to read and write files on the server or local computer. This is safe because you are the one writing the code.

The File System module allows access to local storage. To use it, you need to either "import" or "require" the code from the file system module. For now, the CommonJS pattern will be used to get the methods needed from the File System module.

Download the starting files for this module, which are in a zipped folder called 2.2 Native Modules. Extract the folder and open it in VS Code. Inside index.js, you will find a blank page where you can access the File System module.

To get the File System module, create a constant called fs and set it equal to require with the module name as a string. As soon as you type the double quotes, you will see all available native node modules. The one needed is called fs, short for file system.

```javascript
const fs = require("fs");
```
Now that the module is available, use one of its methods. There are many methods, but the one to use is fs.writeFile, which allows writing a message to a file. The structure is as follows: the first argument is the file to create, the second is the data to put in the file, and the third is a callback to handle errors or issues.

```javascript
fs.writeFile("message.txt", "Hello from NodeJS!", function (err) {
  if (err) throw err;
  console.log("The file has been saved.");
});

```
When you save and run the code using Node in your terminal, the message.txt file will be created in the same folder as index.js. If you open it, it will contain the text "Hello from NodeJS!". This demonstrates the use of a native node module to create and save files without having to write the underlying code yourself.

## Challenge: Reading from a File
Instead of just writing to a file, you can also read from a file. Use the fs.readFile documentation and example code to read the contents of message.txt and log it to the terminal. Change the text in message.txt to something like "Hello from Angela!" or your own name, save it, and then write the code to read and log the file contents.

```javascript
fs.readFile("./message.txt", function (err, data) {
  if (err) throw err;
  console.log(data);
});
```
When you run this code, the output will be in the format of a buffer. According to the documentation, if no encoding is specified, the raw buffer is returned. To output readable text, specify the encoding as "utf8".

```javascript
fs.readFile("./message.txt", "utf8", function (err, data) {
  if (err) throw err;
  console.log(data);
});
```
Now, when you run your code, it will read the file and output the text updates you made to message.txt directly in the terminal. If you encounter issues, compare your code to the solution.js file to check for spelling errors or typos.

Once you are ready, proceed to the next lesson to learn about the Node Package Manager.

## Key Takeaways
Native Node modules provide built-in functionality such as file access and networking, making Node.js more powerful than standard JavaScript.
The File System (fs) module allows reading from and writing to the local file system, which is not possible with browser-based JavaScript.
To use native modules, require them in your Node.js code and utilize their methods, such as writeFile and readFile.
Always specify encoding when reading files to avoid receiving raw buffers instead of readable text.