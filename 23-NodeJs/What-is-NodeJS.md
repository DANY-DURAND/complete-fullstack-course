# What is Node.js?

## 1. Introduction to Node.js
In this lesson, we will learn all about Node.js: what it is and why we are choosing to use it.

## 2. Backend Languages and Frameworks
We know that many different languages can be used to write the backend of a web application. Depending on the language chosen, there are compatible frameworks available to assist development.

## 3. Why Use a Framework?
Why not write all the code from scratch using the chosen programming language to create your web server?

A framework is somewhat like mayonnaise. For example, a great recipe using mayonnaise is chocolate cake. It sounds unusual, but it tastes delicious.

Imagine you want to make a Tuna Mayo sandwich for lunch. You could make your own mayonnaise, or you could use store-bought mayonnaise. In this analogy, mayonnaise represents a framework. You need all the components, like egg and vinegar, to create the final product, which is your web app or, in this case, the Tuna Mayo sandwich.

You could write all your own code, but since this is a commonly used functionality—or condiment—you could use the mayonnaise framework. A web framework provides pre-built components and structures to build an application without writing every line of code from scratch.

## 4. What is Node.js?
Node.js is not exactly a framework. According to Node.js themselves, it is "an asynchronous event-driven JavaScript runtime designed to build scalable network applications."

Let's break this down.

## 5. JavaScript Runtime
Node.js is a JavaScript runtime. Originally, JavaScript was designed to run in the browser, which meant it was impossible to use JavaScript to write any program that was not a website.

Node.js uses the V8 engine, which comes from Chromium. This engine is written in C and C++, is blazingly fast, and powers the Chrome browser.

While JavaScript code traditionally runs in the browser to provide website functionality, it was essentially locked in the "browser land jail." Node.js liberated JavaScript from the browser, allowing it to be used to write any application, whether desktop or server-side.

Node.js provides a JavaScript runtime so that JavaScript can run on machines such as your local computer. This means JavaScript can accomplish almost anything that other popular server-side languages like Ruby, PHP, C#, or Python can do, while maintaining a full JavaScript stack from frontend to backend.

## 6. Asynchronous and Event-Driven
Node.js is asynchronous and event-driven. This means JavaScript code does not have to execute sequentially.

Previously, JavaScript code ran synchronously from top to bottom. Asynchronous means that code can initiate an action and continue running without waiting for that action to complete.

For example, if you order a parcel from Amazon synchronously, you would have to wait until the parcel is delivered before doing anything else. This would tie up resources unnecessarily.

Node.js, being asynchronous and event-driven, allows you to initiate an order and free up resources to do other things. Only when the event of the parcel being delivered occurs does the code continue to run the next parts.

This event-driven model lets you parcel up bits of code into events that trigger when those events happen.

## 7. Why Use Node.js?
Node.js allows us to build applications on a computer using JavaScript. This application is a key aspect of our backend, which runs on a server—a computer that is not a browser.

There are many choices of languages and technologies for backend development. We are choosing Node.js because it allows us to write both frontend and backend code in JavaScript, enabling a unified language across the entire stack.

## 8. Benefits of Node.js
- Developers use a language they are already familiar with, easing the transition from frontend to backend development.
- For solo projects, only one language needs to be learned, and code can be shared between client and server sides.
- Node.js supports easy scaling, making it suitable for large-scale professional projects.
- Its asynchronous, event-driven nature makes it fast and efficient by avoiding resource blocking.
- Node.js has a huge ecosystem and vibrant community, with thousands of open-source modules available via the Node Package Manager (npm).
- Extensive documentation, tutorials, and community support are available, including help on platforms like StackOverflow.

Major companies such as LinkedIn, Twitter, Netflix, and even NASA use Node.js. NASA adopted Node.js to keep astronauts safe and make their data accessible, demonstrating its reliability and power.

## 9. Addressing Alternatives
People often ask why not use C#, Python, or PHP instead of Node.js. While Python is excellent for machine learning and AI projects, and PHP has been popular historically, Node.js is currently dominant in web development.

If you want to learn Python-based backends, consider exploring frameworks like Flask. However, for web development jobs, Node.js is a key skill and widely sought after.

Many web development bootcamps still teach PHP or Ruby on Rails, but these technologies are less relevant today. It's important to ensure curricula are up to date with current industry standards.

## 10. Popularity of JavaScript
GitHub statistics show that JavaScript remains the most popular programming language by code committed. Python is growing in popularity, but JavaScript continues to dominate.

This popularity reinforces the choice of Node.js for backend development, enabling developers to leverage a widely used language across the full stack.

## 11. Summary
You should now understand what Node.js is, what it allows us to accomplish, and why we are choosing it to build our backend.

In the next lesson, we will learn how to install Node.js on your local computer so we can start building applications using Node.js.

## Key Takeaways
- Node.js is an asynchronous, event-driven JavaScript runtime designed to build scalable network applications.
- It allows JavaScript to run outside the browser, enabling full-stack development with a single language.
- Node.js is fast, non-blocking, and supports easy scaling, making it suitable for large-scale professional projects.
- Its vast ecosystem and community support provide numerous open-source modules and resources, contributing to its popularity and widespread adoption.