This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Frontend Mentor - Article

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT/hub). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

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
- [Acknowledgments](#acknowledgments)

**Note: Delete this note and update the table of contents based on what sections you keep.**

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Receive an error message when the `form` is submitted if:
  - The `input` field is empty
  - The email address is not formatted correctly

### Screenshot

![](./public/images/screenshot_proyect.png)

### Links

- Solution URL: [solution URL Frontenmentor](https://www.frontendmentor.io/challenges/advice-generator-app-QdUG-13db/hub/sass-css-flexbox-parcel-mobile-first-async-functions-HyUda_185)
- Live Site URL: [Article component app by Esteban Diaz](https://article-challenge-with-nextjs.vercel.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties and CSS modules
- Flexbox and CSS Grid
- Tailwind utilities
-
- [Async/await Functions](https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Statements/async_function)
- [React JS](https://es.react.dev/) - Library frontend
- [NextJS 13](https://nextjs.org/) - The React Framework, components side server render, app router
- [Json server](https://www.npmjs.com/package/json-server) - fake REST API 

### What I learned

I learned how you can use a API with Async/await functions.

To see how you can return data from API and print on screen:

```js
    response = await fetch('https://api.adviceslip.com/advice');
    if(response.status === 200){
        data = await response.json();
        drawAdvice(data.slip.id, data.slip.advice);
    }
```
I learned how you can use Hooks React like: UseEffect, UseState and UseRef. Create custom Hooks too.

```js
    const [isVisible, setIsVisible] = useState(false)
    const breakPoint = useBreakPoint(640)
    const buttonRef = useRef(null)
    const tooltipRef = useRef(null)

    const toggleShowTooltip = () => {
        setIsVisible(!isVisible)
    }
```
### Continued development

I want to continue focusing in a proyect react JS. going forward building a proyect from react. 

### Useful resources


## Author

- Frontend Mentor - [@esteban2368](https://www.frontendmentor.io/profile/esteban2368)


