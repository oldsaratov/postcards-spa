# Postcards SPA

## Install

Check out the code
```
git clone git@github.com:oldsaratov/postcards-spa.git
```

Install npm dependencies
```
npm install
```

## Run

Available npm tasks

* `npm start` - Spins up Koa server to serve your app at `localhost:3000`. HMR will be enabled in development.
* `npm run compile` - Compiles the application to disk (`~/dist` by default).
* `npm run dev:nw` - Same as `npm start`, but opens the redux devtools in a new window.
* `npm run dev:no-debug` - Same as `npm start` but disables redux devtools.
* `npm run test` - Runs unit tests with Karma and generates a coverage report.
* `npm run test:dev` - Runs Karma and watches for changes to re-run tests; does not generate coverage reports.
* `npm run deploy`- Runs linter, tests, and then, on success, compiles your application to disk.
* `npm run lint`- Lint all `.js` files.
* `npm run lint:fix` - Lint and fix all `.js` files.

Based on [react-redux-starter-kit](https://github.com/davezuko/react-redux-starter-kit).
