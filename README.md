# Typescript Jasmine Test Harness

Information on Typescript module files here [NodeJS TypeScript](https://nodejs.org/api/typescript.html#determining-module-system).

## Installation

Add  ```"jasmine",
        "jasmine-browser-runner",
        "typescript"``` to your package.json

then `npm install`

If you are adding this into an existing project then you will need the tsconfig.json

## Running

`npm test` to run the tests in the console for example in CI.

`npx jasmine-browser-runner serve` to run the tests in the browser runner

If everything is running fine you should see Jasmine Browser Runner at localhost:8888

![Jasmine Test Runner](https://github.com/overloadedargs/typescript_jasmine/blob/main/Jasmine_browser_runner.png) "Jasmine Browser Runner"
