# Fa-Generator
You can use this npm package to generate the initial structure of a project.

To create this generator I used [Inquirer](https://www.npmjs.com/package/inquirer?source=post_page---------------------------).

## Templates
Contain the different template you can generate with this generator. For the moment there is only one template but I will add others soon.

For each template the readme file contains a description about the set of useful commands available for the projects.

#### fa-react-redux-saga
This is a template projects to build an application using [React](https://reactjs.org/) with [react-redux](https://redux.js.org/) and [redux-saga](https://redux-saga.js.org/)

In the project there is also a really simple example and some console log to better undestand how use the store with this structure

#### fa-stencil-react
This is a template projects to build an application using [Stencil](https://stenciljs.com/) and [React](https://reactjs.org/).

In stencil you can create independent components that then you can include in the React application, where you will implement the logic.

[Lerna](https://github.com/lerna/lerna) is used to join Stencil package with React package.