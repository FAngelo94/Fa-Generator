# Stencil-React Project Generator

This is a template projects to build an application using [Stencil](https://stenciljs.com/) and [React](https://reactjs.org/).

In stencil you can create independent components that then you can include in the React application, where you will implement the logic.

[Lerna](https://github.com/lerna/lerna) is used to join Stencil package with React package.

## How it works
- Install globally the generator launch this command: `npm i fa-generator -g`
- Run the generator launch this command where you want create the project: `fa-generate`
- Choose one of the templates shown
- Write the name of the project
- Go inside the project created and launch this commands to initialize the project: `npm run fa-init-project`
For many details about the project created and the commands you can use see the readme in the root directory

## packages
Contain the real projects, divided in 2 different projects.

#### app-pkg
Contain the [React](https://reactjs.org/) project with the logic of the application.

#### stencil-pkg
Contain the [Stencil](https://stenciljs.com/) project with the components that are independent from the logic and used from React to build the application.

## Commands
Launch this commands to the root folder project
- `npm run fa-init-project` -> press this command when you enter the first time in the project to set the environment
- `npm run project-build` -> build stencil components creating *dist* and *loader* folders and then build react application
- `npm run project-start` -> build stencil components creating *dist* and *loader* folders and then start react application 
- `npm run app-build` -> build react application only
- `npm run app-start` -> start react application only
- `npm run stencil-build` -> build stencil components only creating *dist* and *loader* folders
- `npm run stencil-start` -> start stencil application only to see the components put in the index.html file