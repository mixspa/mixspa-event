# Mixspa Events
This is events for mixspa

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/events.svg)](https://npmjs.org/package/@mixspa/events)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/events.svg)](https://npmjs.org/package/@mixspa/events)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-events.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-events)

[![NPM](https://nodei.co/npm/@mixspa/events.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/events/)

## Features:

* Support Publish your package to git & npm with ci.
* Support CircleCi for pipeline.
* Support ES7 & ES6 syntax.
* Support ESlint to check the code.
* Support Jest to test your code.
* Support Yarn audit to do security check for dependencies.

## Development:

### Setup

Clone this stencil and replace `@mixspa/events` with your package name.

```
$ git clone git@github.com:xqstencils/mixspa-events.git
```

### Install dependencies

```
$ yarn install
```

### Compile code

```
$ yarn babel
# or run babel in watch mode
$ yarn babel:watch
```

### Generate distribution code

```
$ yarn build
```

### Linting

```
$ yarn lint
```

### Testing

```
$ yarn test
# or run the test in watch mode
$ yarn test:watch
```

### Security check

```
$ yarn audit
```

### Setup CI

* Update the circleci config
* Setup the ci into circleci site.


### Publish your package

```
$ yarn release
```

## License

mixspa-events is released under the [MIT license](https://github.com/xqstencils/mixspa-events/blob/master/LICENSE).
