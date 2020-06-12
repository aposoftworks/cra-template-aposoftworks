This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Create React App

To learn how to use create-react-app, please enter the link above.

## Directory structure

The main source directories are pretty much self explanatory, css goes css relative to the entire project and importing packages (such as bootstrap). img are any svg/jpg/png/etc that are pertinent to the project, they can be only used once. Now about the js:

### renders

Renders are also called dumb components, they do not contain logic and should not call other renders or systems.

### services

Services are files that don't contain react components, they can be javascript objects or classes or whatever you like.

### systems

Systems are also called smart components, they need to contain logic (or they would be renders), should avoid rendering, and can call other systems or renders.

### views

Views are a collection of renders and systems, they cannot contain other views inside of them. They should also avoid containing logic or render (but not 100% obligatory). The difference between views and renders, is that renders are considered pages, are final and are not imported by other views/renders/systems, they are also what are called by the router.