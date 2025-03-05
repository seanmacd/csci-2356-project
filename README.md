# CSCI-2356 - Mobile App Development Project - Winter 2025

[Saint Mary's University, Halifax, NS](https://smu.ca) - Professor Terence Goldsmith

# About this repository

This [monorepo](https://en.wikipedia.org/wiki/Monorepo) has two sub-repositories.

## `ui` Front-end

This is the front-end of the application. This directory was scaffoled using Vite, which is a React bundler.

### Important files & directories

* `src` main application code, including pages, components, styles, etc.
* `public` files served publically at the root of the application. *Anything in this directory will be downloadable by filename*.
* `index.html` the HTML template. All components will be rendered within the root div in this file.

## `api` Back-end

This is the back-end (API) of the application. This directory was set up manually. This part of the app is responsible for defining REST endpoints that the front-end will use to fetch data.

### Important files & directories

* `src` main application code, including API routes, database scripts, etc.
* `.env` environment file used to set config values for the application.

# Technologies used

## Common

* TypeScript (JavaScript)
* Node.js & [PNPM](https://pnpm.io/) (package manager)

## Front-end

* [React](https://react.dev) with [Vite](https://vite.dev/) & [SWC](https://swc.rs/)
* [React Router](https://reactrouter.com/)
* [TailwindCSS](https://tailwindcss.com)
* [Embla Carousel (React)](https://www.embla-carousel.com/get-started/react/)

## Back-end

* [Express.js](https://expressjs.com/)

# Development environment setup steps

## Prerequisites

* Install [Node.js](https://nodejs.org/en)
* Enable pnpm:
  ```
  npm i -g pnpm
  ```
* Install TypeScript
  ```
  npm i -g typescript
  ```

## Setup steps

1. In a terminal window, clone the repository where you typically put files relating to this course
    ```
    cd <your directory>
    git clone https://github.com/seanmacd/csci-2356-project && cd csci-2356-project
    ```
2. Take a look around and install the packages required
    ```
    ls -al
    cd ui && pnpm install && cd ..
    cd api && pnpm install && cd ..
    ```
3. Open the project in VSCode
    ```
    code .
    ```
4. Complete the git tutorial below before getting started with development.

## Git tutorial

1. Create a branch
    ```
    git checkout -b <your name>
    ```
2. In the root of the repository, create a text file
    ```
    echo "Hello, world!" > <yourname>.txt
    ```
3. Commit the file to git
    ```
    git add .
    git commit -m "My first commit"
    git push -u origin <your name>
    ```
4. Open a pull request on GitHub in your browser.
5. Ask a team member to review & merge your pull request.
6. Once the pull request has been merged, switch back to `main` and delete your branch
    ```
    git checkout main
    git pull
    git branch -d <your name>
    ```

*Once everyone has completed this exercise, delete the text files*

# Basic development workflow with git

1. Clone the repository
2. Create a branch for your work
3. Work as normal and make commits frequently
4. Once your work is complete, open a pull request
5. Have a team member review your code
6. Make changes as required by the code review
7. Merge your pull request
8. See your changes (if CI/CD is setup to automatically deploy to the server)

# Group Members

* Connor (Jamison) McNeil
* Sean MacDougall
* Wenda Tan
* Badhan Dasgupta
* Rongkun Zhu
