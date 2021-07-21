# Head to Toe
#### Connecting you with gender-affirming support
## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Walkthrough](#walkthrough)
* [Authors](#authors)
* [Technologies](#technologies)
## Description
This is an app for witches both wicked and good and all those that lie between.  Here, an inspirational quote from Ron Swanson is delivered to our witchy users, by a friendly kitten familiar with an invitation to cast a spell. Users have a place to cast and favorite their spells.
Per the specs, React, Router, Asynchronous JavaScript, Cypress end to end acceptance testing, and conditional rendering were implemented. The Rubric & Spec for this(https://frontend.turing.edu/projects/module-3/niche-audience.html)

## Notable Features
* An amazing kitten image or giphy to deliver messages from Ron Swanson
 *The above is only true when the api delivers a truthy image url*
* A hilarious or grimacing quote by Ron Swanson to lighten or darken the day
* The choice to see favorited spells
* Cypress testing to test user flows
* Responsive and Responsible - can be used on all screen sizes with considerations for tabbing, color choices, and button sizing for easer of UX

## Link
* We are [Published](HeadToToe.surge.sh)

## Installation
1. Clone this repo using:
  * `git clone`  `https://github.com/battan40/KittensToWitches/tree/main/kittens-to-witches`
2. `cd` into your cloned directory
3. Run `npm install`
4. Run `npm start`

#### Learn More
You can learn more about creating apps using `React` and `JSX` here: [Create React App Documentation](https://create-react-app.dev/docs/getting-started/)
You can learn more about implementing `Router` with `React` here: [React Router Docs](https://reactrouter.com/)
Here is a resource we used to learn how to implement `Optional Chaining` with `JSX`: [MDN DOCS](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
For a learning `Context API`, this resource could be useful: [Context API](https://www.youtube.com/watch?v=v1s_rbZbqQI)

#### Cypress Testing
1. Once the app is set up locally, from the root directory, install `Cypress`
  * Run `npm install cypress --save-dev`
2. To open and run the tests
  * Run `npx cypress open`

## Walkthrough
1. Once the app is accessed, a user is immediately shown a welcoming page with a newly randomized kitten image and Ron Swanson quote pairing on a SpellCard
2. There is a form for the user to fill out with an invitation to cast a spell
3. Once a spell is cast the spell card appears for the user to see.
4. There is an option to favorite a spell.
5. As well, the user can click on the link at the bottom of the page to visit their favorited spells

## Preview
![Swansons](./src/assets/boys-men-swansons.png?raw=true)

## Learning Goals
* Further understand and implement modularity of Reacts Component structure with CSS styling
* Build on React Application using router, propTypes and fetching
* Test all Component flows and Asynchronous JavaScript using cypress

## Evolution of the Project
To better learn React, Cypress, Router was independent of my instructors. After carefully designing a project for an *extremely* niche audience. I did check in with my instructors to make sure I stayed on track with work/life balance goals.

## Reflections
Working with this project brought home user flow end to end testing for me. I have tested in a project since I started Turing perhaps in a rudimentary way.  The dynamism of cypress testing finally came through. There is literally always room to edit, DRY, or implement a technology more succinctly.  So, I know I have miles to go on all this material.  For me it is a sweet spot to truly grasp the reasons why we code the way we do, more than to simply grasp the how.

## Future Iterations
* Build my own kitten image api with its own randomizer to be imported through a fetch call
* Refactor all of modular files for best practice approaches, to ensure all user flows are accounted for
* Access to the images individual alt tags
* Implementing Aria inside the react component structure to verify that our page is truly accessible
* Creating the ability to locally our users favorites
* The ability to delete a spell

## Authors
<table>
    <tr>
        <td> Angie Battillo <a href="https://github.com/battan40">GH</td>
        <td> Marceline Ball <a href="https://github.com/MarcelineBall">GH</td>
        <td> Riley Martin <a href="https://github.com/RMartin0717">GH</td>
    </tr>
    </tr>
        <td><img src="https://avatars.githubusercontent.com/u/58871312?v=4" alt="A. Battillo" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/65052658?v=4" alt="M. Ball" width="125" height="auto" /></td>
        <td><img src="https://avatars.githubusercontent.com/u/76501236?v=4" alt="R. Martin" width="125" height="auto" /></td>
    </tr>
</table>

## Technologies
<table>
    <tr>
        <td>Functionality</td>
        <td>Framework</td>
        <td>Library</td>
        <td>Structure</td>
        <td>Styling</td>
        <td>Testing</td>
        <td>Package Installation</td>
        <td>Continuous Integration</td>
        <td>Global State Management</td>
    </tr>
    </tr>
        <td><img src="./src/assets/images/js-icon.png" alt="javascript" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/reactjs-logo.jpeg" alt="react" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/router-icon.png" alt="router" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/html-logo.png" alt="html" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/css-logo.png" alt="css" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/cypress-logo.jpeg" alt="cypress" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/npm.png" alt="npm" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/circleCI.png" alt="circle ci" width="100" height="auto" /></td>
        <td><img src="./src/assets/images/contextAPI.jpeg" alt="context api" width="100" height="auto" /></td>
    </tr>
</table>
