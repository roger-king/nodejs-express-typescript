# Node.JS, Express, and Typescript

## About:
Typescript Node.js and express API project seed...

This is a bare bones setup with an example "Revision" api endpoint.

## Project Structure
.
|-- config
|   |-- default.json -> development configuration
|   |-- test.json -> test configuration
|-- public
|   |-- media -> public media (images, fonts, videos, etc...)
|   |   |-- images -> public images
|   |   |-- www -> web frontend directory
|-- src -> main source code.
|   |-- middleware
|   |   |-- router
|   |   |   |-- index.ts -> Used to bootstrap and import API urls
|   |   |   |-- Web.ts -> Router to setup to serve static assets
|   |-- modules -> source code modules
|   |   |-- mod -> module name
|   |   |   |-- index.ts -> entry point for the module ( I use this as the file to contain the API entry).
|   |   |   |-- mod.tests.ts -> test cases
|   |   |   |-- mod.model.ts -> module model class
|   |   |   |-- mod.controller.ts -> module controller class
|   |   |   |-- *mod.schema.ts -> module schema class
|   |-- index.ts -> server class (entry point for whole application)
|-- gulpfile.js -> automated tasks (gulp)
|-- package.json
|-- tsconfig.json
|-- tslint.json
|-- yarn.lock


Main point here is that I keep everything in one place for the modules. It makes it easier for importing.

## Development:
```
git clone https://github.com/roger-king/nodejs-express-typescript.git api
cd api
yarn install
npm run dev
```

## Production:

```
npm run prod:compile
```

# TODO:
- [x] Example unit test with Jest
- [ ] Proper tslint.json
- [ ] Bootstrap routes
