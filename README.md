# QR Card component

The QR Card component is a fully self-contained, drop-in solution utilizing the Web Components API and `node-qrcode` for dynamically generating and displaying QR codes within your web applications. Just add `QRCard.js` anywhere in your markup and it's ready to go out-of-the box. It really is that easy!

It is a solution to the [QR code component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/qr-code-component-iux_sIO_H).

## Table of contents

- [Overview](#overview)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

### Overview

This is a reusable card component that uses node-qrcode bundled with Browserify for client-side generation of QR codes.

## My process

I wanted to make a reusable component instead of a one-off solution to the challenge. I also like to keep things as vanilla as possible when it comes to programming challenges so I did not want to use any frameworks like React or Astro. I knew the Web Components API existed but that's about it, which meant a lot of opportunity for learning and made it the perfect candidate for this challenge!

I built and styled the card component and along the way I had the idea to make it generate QR codes dynamically from a user provided url. After all if it only displays the same QR code then what is the point of making it reusable? Not to mention that is pretty boring!

Next I had to dive into some more in-depth knowledge of Web Components such as working with lifecycle callbacks. 
## Built with

- [Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) - Web Component API
- [Browserify](https://browserify.org/) - Dependency bundler
- [node-qrcode](https://www.npmjs.com/package/qrcode/) - QR code generator

## What I learned
- Web Component API
- Working with the shadow DOM
- Implementing a customization API via component attributes

## Useful resources

- [mdn web docs - Web Components](https://developer.mozilla.org/en-US/docs/Web/API/Web_components) - Documentation on Web Components API
- [Learn Web Components in 25 Minutes](https://www.youtube.com/watch?v=2I7uX8m0Ta0) - This is a great video from one of my favorite YouTube channels that shows a practical example of how to build and use a component using the web components API

## Author

- LinkedIn - [Jason Sherrick](https://www.linkedin.com/in/jsherrick/)
- Frontend Mentor - [@j-sherrick](https://www.frontendmentor.io/profile/j-sherrick)
- GitHub - [j-sherrick](https://github.com/j-sherrick)