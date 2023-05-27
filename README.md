# MPW - Node.js Rest API Server

## Local environment setup

* Node.js recomended version `v16.15.1` download Node.js from its website [here](https://nodejs.org/en/).
* Recomended IDE `Visual Studio Code` can be downloaded [here](https://code.visualstudio.com/).
    * VSCode Eslint plugin can be downloaded [here](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint).
    * VSCode Prettier Code Formatter can be downloaded [here](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode).

## Running the project locally
```sh
git clone git@github.com:jlopez513573/ExpressBackend.git
npm i
npm run start:dev
```
Open browser on http://localhost:3000

## Running linter, code formatter, tests report and tests coverage
```sh
npm run eslint // gives you a report of what files have linting issues
npm run prettier:check // gives you a report of what files have formatting issues
npm run prettier:fix // automatically fixes files with formatting issues
npm run test // run tests and gives you an inline report
npm run test:report // run tests and gives you a report under the test-report folder
npm run test:coverage // run tests and gives you a coverage report under the coverage folder
```