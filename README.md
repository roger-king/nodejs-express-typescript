# Node.JS, Express, and Typescript

## About:

Typescript Node.js, inversify, and express API/GraphQL project seed...

This is a bare bones setup with an example "Revision" api endpoint.

## Project Structure

```
.
└── config
|   └── default.json #development configuration
|   └──test.json #test configuration
└── public
|   └── media #public media (images, fonts, videos, etc...)
|   |   └── images #public images
|   |       └── error.jpg #replace with your own
|   |   └── www #web frontend directory
|   |       └── error.html #replace with your own
└── src #main source code.
|   └── middleware
|   |   └── router
|   |   |   └── index.ts #Used to bootstrap and import API urls
|   |   |   └── Web.ts #Router to setup to serve static assets
|   └── modules #source code modules
|   |   └── index.ts #entry point for modules. import/export all modules APIs here.
|   |   └── mod #module name
|   |   |   └── index.ts #entry point for the module ( I use this as the file to contain the API entry).
|   |   |   └── mod.tests.ts #test cases
|   |   |   └── mod.model.ts #module model class
|   |   |   └── mod.controller.ts #module controller class
|   |   |   └── *mod.schema.ts #module schema class
|   └── index.ts #server class (entry point for whole application)
└── gulpfile.js #automated tasks (gulp)
└── package.json
└── tsconfig.json
└── tslint.json
└── yarn.lock
```

Main point here is that I keep everything in one place for the modules. It makes it easier for importing.

## Development:

```bash
git clone https://github.com/roger-king/nodejs-express-typescript.git [project name]
cd [project name]
node setup.js
yarn install
npm run start:dev
```

## Production:

```
npm run prod:compile
```

# Documentaion:

*   [SOLID principles](https://dev.to/remojansen/implementing-the-onion-architecture-in-nodejs-with-typescript-and-inversifyjs-10ad)
