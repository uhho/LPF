# Low Pass Filter for JavaScript

## Overview

Lightweight algorithm to for smoothing series of values.
Low Pass Filter muffles fast (high-frequency) changes to the signal.
For more information visit http://en.wikipedia.org/wiki/Low-pass_filter

## Installation

```
npm install lpf
```

## Examples

```js
// Array of values
LPF.smoothing = 0.5;
var values = [10,8,9,10,12,8,50,10,12,8];
LPF.smoothArray(values)
// RESULT: [10,9,9,10,11,9,30,20,16,12]

// Stream
LPF.smoothing = 0.2;
LPF.init([10,10,10,10,10,10,10,10,10,10]);
LPF.next(20); // around 12.0
LPF.next(10); // around 10.3
```

## Testing

Open folder and run:
```
mocha -R spec
```

## License

Software is licensed under MIT license.
For more information check LICENSE file.