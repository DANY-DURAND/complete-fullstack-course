# Introduction to the Document Object Model (DOM)
## Introduction to the Document Object Model (DOM)
This module focuses on the Document Object Model, commonly referred to as the DOM. Let's explore what this concept entails.

Up until now, our websites have been static. We planned the content and appearance, wrote the HTML and CSS code, saved it, refreshed the browser, and saw our website.

However, if we want our website to be interactive, we need to change parts of the website dynamically. For example, when a user clicks a button, we need to respond by changing content or appearance.

Once a website is live, we cannot manually update HTML and CSS and reload the page every time a user interacts. This approach is impossible and impractical, especially with multiple users.

The DOM solves this problem by cataloging the web page into individual objects that can be selected and manipulated.

Consider a basic website with HTML code containing a head section, a body section, a title, and a button. The browser converts this HTML into a tree structure of objects representing the page elements.

The browser performs this conversion when loading the page, turning each element and its data into a tree of objects. This tree structure is how the DOM is typically represented.

In the DOM tree, elements have relationships such as descendants and siblings. For example, the head and body are siblings, both descendants of the HTML object. Everything in the HTML document is contained within the "document" object.

This structure resembles an organizational chart with bosses and subordinates mapped out.

## Exploring the DOM in Practice
Let's see the DOM in action. We have a simple HTML document with a heading (h1), a checkbox input, a button labeled "Click Me", and an unordered list with three items, including a link to google.com.

Using a Chrome plugin that visualizes the HTML tree, we can see the DOM tree structure: the document contains the HTML object, which has head and body children. The body contains the h1, input, button, ul, and script elements.

We can access the DOM using JavaScript and navigate through this tree. For example, typing document in the console shows the entire HTML document.

Accessing document.firstElementChild returns the HTML element. Further, document.firstElementChild.firstElementChild returns the head element.

Similarly, document.lastElementChild returns the body element, allowing us to select specific parts of the page.

To select the h1 element inside the body, we use  **document.lastElementChild.firstElementChild.**

Once selected, we can manipulate the element. For example, saving the h1 element in a variable heading allows us to change its content.

```javascript
var heading = document.lastElementChild.firstElementChild;
javascript Code Sample
heading.innerHTML = "Good Bye";
Executing this changes the h1 text from "Hello" to "Good Bye" dynamically on the web page.
```
We can also change styles, for example, setting the text color to red:

```javascript
heading.style.color = "red";
```
This changes the color of the heading text to red.

We can select other elements, such as the checkbox input, using document.querySelector and simulate actions like clicking.

```javascript
var checkbox = document.querySelector("input");
checkbox.click();
```
This simulates a mouse click on the checkbox, toggling its state.

Objects, Properties, and Methods in the DOM
Objects in the DOM have properties and methods. Properties describe attributes of the object, while methods are actions the object can perform.

For example, consider a car object. It might have properties like color, number of seats, and number of doors, and methods like brake(), drive(), and park().

Using dot notation, we can get or set properties and call methods. For example, car.color gets the color property, and car.numberOfDoors = 0 sets the number of doors.

Calling a method like car.drive() makes the car perform an action.

The difference between methods and functions is that methods are associated with objects and represent actions the object can perform.

In the DOM, elements like buttons have properties such as innerHTML, style, and firstChild, and methods like click(), appendChild(), and setAttribute().

Properties are accessed or modified without parentheses, while methods are called with parentheses, optionally passing arguments.

Using dot notation, we can manipulate HTML objects by accessing their properties and calling their methods.

Challenge
Download the provided files: index.html, index.js, and styles.css. Without modifying the HTML file, use the console to select the third list item (li) and change its text from "Third" to your name or any text you prefer.

Key Takeaways
The Document Object Model (DOM) represents a web page as a tree of objects that can be selected and manipulated.
Browsers convert HTML into the DOM tree structure when loading a web page.
JavaScript can interact with the DOM to dynamically change content and styles without reloading the page.
Objects in the DOM have properties (describing attributes) and methods (actions they can perform), accessible via dot notation.