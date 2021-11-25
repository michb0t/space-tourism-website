# Frontend Mentor - Space tourism website solution

This is a solution to the [Space tourism website challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/space-tourism-multipage-website-gRWj1URZ3). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for each of the website's pages depending on their device's screen size
- See hover states for all interactive elements on the page
- View each page and be able to toggle between the tabs to see new information

### Screenshot
![image](https://user-images.githubusercontent.com/81781093/143328310-c9e9c2a7-5a29-4577-8504-1c6b1360b9ff.png)

### Links

- Solution URL: [Github Solution](https://github.com/michb0t/space-tourism-website)
- Live Site URL: [Live Site](https://michb0t.github.io/space-tourism-website/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- Javascript

### What I learned

- Grid layouts: This project enabled me to fully experience the power of the grid layout. Really fun though I did spend some time configuring the sizes to ensure they were displaying correctly.

- Setting up the parent container, then create the template areas. 

```css
    .grid-container {
        text-align: left;
        column-gap: var(--container-gap, 2rem);
        grid-template-columns: minmax(2rem,1fr) minmax(0, 47rem) minmax(0,23rem) minmax(2rem,1fr);
    }

    .grid-container__crew {
        grid-template-areas:
            ". title title ."
            ". content image ."
            ". tabs image .";
        justify-items: start;
        align-items: start;       
    }

```

### Continued development

- Continue practicing grid layouts
- Learn more about javascript
- Add this project to my website portfolio

### Useful resources

- Kevin Powell for his tutorial on [Scrimba](https://scrimba.com/learn/spacetravel)
- MDN for their articles as always

## Author

- Website - [Michelle Pham](https://github.com/michb0t)
- Frontend Mentor - [@michb0t](https://www.frontendmentor.io/profile/michb0t)
- Twitter - [@michbot7](https://twitter.com/michbot7)
