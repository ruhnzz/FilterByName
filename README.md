
 # Filter Application

## Overview

The Filter Application is a simple frontend project built using HTML, CSS, and JavaScript. The goal of this project is to dynamically display user profile cards and filter them based on the text entered in the search box.

As the user types in the search input field, the application instantly filters and displays only the matching profiles. This project helped practice important JavaScript concepts such as arrays of objects, DOM manipulation, event handling, and array filtering.

## Features

* Dynamic creation of profile cards using JavaScript
* Real-time search filtering while typing
* Case-insensitive search functionality
* Clean card UI with hover effects
* Circular profile images
* Responsive card layout using Flexbox
* Modern UI with gradient header styling

## Technologies Used

* HTML5
* CSS3
* JavaScript (ES6)

## Project Structure

index.html – Contains the structure of the application
style.css – Contains styling for layout, cards, and UI design
script.js – Contains JavaScript logic for rendering users and filtering

## How the Application Works

1. A JavaScript array of objects stores user information such as name, profile picture, and bio.
2. The `showUser()` function dynamically creates user cards using DOM methods.
3. Each card contains a profile image, user name, and short bio.
4. The cards are appended inside a container element.
5. An `input` event listener tracks the search field.
6. When the user types something, the `filter()` method is used to filter users.
7. The container is cleared and the filtered users are rendered again.

## Data Structure Used

The user data is stored as an array of objects.

Example:

```javascript
const users = [
{
    name: "Aarav Sharma",
    pic: "image-link",
    bio: "Frontend developer who enjoys building clean and interactive user interfaces."
},
{
    name: "Ananya Verma",
    pic: "image-link",
    bio: "UI/UX enthusiast passionate about designing simple and beautiful web experiences."
}
];
```

Each object contains:

* name
* pic (profile image URL)
* bio

## Important JavaScript Concepts Practiced

* Arrays of objects
* Array `filter()` method
* String methods (`includes`, `toLowerCase`)
* DOM element creation (`createElement`)
* Adding classes with `classList`
* Appending elements using `appendChild`
* Event listeners (`input` event)
* Dynamic UI updates
* Clearing elements using `innerHTML`

## Dynamic Card Creation

User cards are generated dynamically using JavaScript instead of writing them manually in HTML. This helps understand DOM manipulation and scalable UI generation.

The `showUser()` function creates:

* card container
* image box
* profile image
* name
* bio

and appends them to the main container.

## Search Filtering Logic

The filtering functionality uses the `filter()` method on the users array.

Initially, `startsWith()` was considered, but it only matches the beginning of a string. For example, searching `Mehta` would not match **Rahul Mehta** because the name starts with `Rahul`.

To improve the search functionality, `includes()` was used instead. This allows matching anywhere in the name.

Example implementation:

```javascript
let newUsers = users.filter(user =>
    user.name.toLowerCase().includes(find.toLowerCase())
);
```

Why this approach is better:

* Matches text anywhere in the name
* Works with both first name and last name
* Case-insensitive search using `toLowerCase()`
* Simpler and cleaner code

Example searches:

* `rah` → Rahul Mehta, Rahul Das
* `mehta` → Rahul Mehta
* `ana` → Ananya Verma, Ananya Nair

## CSS Concepts Used

This project also helped practice important CSS concepts:

Flexbox Layout
Cards are placed side by side using:

* `display: flex`
* `flex-wrap: wrap`

Circular Profile Images
Profile images are displayed inside circular containers using:

* `border-radius: 50%`
* `overflow: hidden`
* `object-fit: cover`

Card Styling
Cards are styled with:

* border radius
* shadows
* spacing
* centered content

Shadow Effects
Cards use `box-shadow` to create depth.

Hover Animation
Smooth hover animation is added using:

`transition: 0.3s`

Gradient Header
A modern gradient background is applied to the header using `linear-gradient`.

## Problems Solved During Development

While building this project, several issues were encountered and resolved:

* Fixing image overflow inside circular containers using `overflow: hidden`
* Correctly setting image source using `img.src` instead of `img.style.src`
* Appending dynamically created elements to the correct container
* Aligning cards side by side using Flexbox
* Adding smooth hover effects with CSS transitions
* Improving filtering logic using `includes()` instead of `startsWith()`
* Implementing case-insensitive search using `toLowerCase()`

## What I Learned From This Project

* How to store and manage structured data using arrays of objects
* How to dynamically generate UI components using JavaScript
* How to filter data using array methods
* How to manipulate the DOM to update UI dynamically
* How to combine CSS layout techniques with JavaScript logic
* How real-time search filtering works in web applications

## Possible Future Improvements

Some improvements that can be added in the future:

* Show a "No results found" message when no user matches the search
* Add animations when cards appear or disappear
* Make the layout fully responsive for mobile screens
* Allow filtering by bio as well as name
* Fetch user data from an API instead of a static array

## Conclusion

This project demonstrates how JavaScript can be used to dynamically create and update UI components. It combines DOM manipulation, array methods, and CSS layout techniques to build an interactive user interface.

Building this project strengthened my understanding of JavaScript fundamentals and frontend development concepts.

<img width="1920" height="879" alt="Screenshot 2026-03-11 221610" src="https://github.com/user-attachments/assets/b6c1aa41-a7b4-4027-a572-d53ff528c4a3" />

after filtering
<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/977d6090-07ad-4861-93cf-3b058f69c498" />

<img width="1920" height="1008" alt="image" src="https://github.com/user-attachments/assets/a24b327e-9f63-4bc0-93d2-890ec414177c" />

if the user is not found

<img width="1920" height="518" alt="Screenshot 2026-03-11 223813" src="https://github.com/user-attachments/assets/7b536827-5ea0-4d07-8ddb-d7609075a72c" />









