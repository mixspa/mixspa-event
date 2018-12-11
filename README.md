# Mixspa Events
This is a simple pubsub for mixspa with window custom event. This library only can be used in browser.

## Current Status:

[![NPM Version](https://img.shields.io/npm/v/@mixspa/events.svg)](https://npmjs.org/package/@mixspa/events)
[![NPM Downloads](https://img.shields.io/npm/dm/@mixspa/events.svg)](https://npmjs.org/package/@mixspa/events)
[![Build Status](https://circleci.com/gh/mixspa/mixspa-events.svg?style=svg)](https://circleci.com/gh/mixspa/mixspa-events)

[![NPM](https://nodei.co/npm/@mixspa/events.png?downloads=true&downloadRank=true&stars=true)](https://nodei.co/npm/@mixspa/events/)

## How to use?

```js
import MixspaEvent from 'mixspa-events'
/*
MixspaEvent.on('[module]:[action]', listener);
*/
MixspaEvent.on('test:update', (message) => {
  console.log(message);
});

/*
MixspaEvent.emit('[module]:[action]', message);
*/
MixspaEvent.emit('test:update', 'Hello Test');
```

## License

mixspa-events is released under the [MIT license](https://github.com/mixspa/mixspa-events/blob/master/LICENSE).
