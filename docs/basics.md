# React Basics

## What is [React](https://facebook.github.io/react/)

JavaScript library originally developed by Facebook that is concerned with rendering the UI

## [Thinking In React](https://facebook.github.io/react/docs/thinking-in-react.html)

## What is a component

Basic building blocks in React are components - they are UI components
Ultimately components render HTML that is displayed in the browser.

How React render javascript as HTML?

## What is the DOM

The Document Object Model refers to the browser's HTML tree that makes up a web page.

Virtual DOM

A react component describes how the view should be represented in HTML and it builds up a representation of the HTML in a fake DOM, called the virtual DOM.

It then uses an efficient algorithm to find the difference between the real DOM and the virtual DOM, then updates the real DOM with only the things that are different.

## What is JSX

It is a way that was created to allow a JavaScript representation of HTML to be more HTML-like.

They look similar but there are some notable differences:

* class vs className
* adding comments in code

## How do you make a component

Different ways to create a component

* functional vs classes

When should you use a function vs a class?

## Tips

* Always capitalize the name of a component - Why is this important?
* Try to use functional stateless components whenever possible - Why is this important?

## Data Flow in React through Components

* unidirectional data flow
* lifecycle hooks

## State vs Props

What are props?

How can we perform type checking on props?

## Styling Components

  Using css - What is happening here?
    What what does the npm package called [classNames](https://github.com/JedWatson/classnames) do?
  Using inline styles
  Using Sass
  Using css in js - i.e. [styled-components](https://www.styled-components.com/)

## What is state

  Who can explain what a state machine is?
  Is a React App a state Machine?

## Questions to consider regarding state

Does the data change?
  If not, it is not state.
Is the data passed down through props?
  If so. it is not state.
Can you derive the data from some other data? i.e. can it be calculated?
  If so, it is not state.


