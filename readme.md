# record-flixbus-movement

Command-line tool to **record the movement of a [Flixbus](https://flixbus.de) coach using the on-board WiFi.**

[![npm version](https://img.shields.io/npm/v/record-flixbus-movement.svg)](https://www.npmjs.com/package/record-flixbus-movement)
![ISC-licensed](https://img.shields.io/github/license/derhuerst/record-flixbus-movement.svg)
[![chat with me on Gitter](https://img.shields.io/badge/chat%20with%20me-on%20gitter-512e92.svg)](https://gitter.im/derhuerst)
[![support me on Patreon](https://img.shields.io/badge/support%20me-on%20patreon-fa7664.svg)](https://patreon.com/derhuerst)


## Installation

```shell
npm install -g record-flixbus-movement
```

Or just use [`npx`](https://npmjs.com/package/npx):

```shell
npx record-flixbus-movement >file.ndjson
```


## Usage

```
Usage:
    record-flixbus-movement >file.ndjson
```

The JSON format matches [`record-tgv-movement`](https://npmjs.com/package/record-tgv-movement) where possible:

```json
{
	"latitude": 52.704891,
	"longitude": 13.064141,
	"altitude": 53.9,
	"speed": 66,
	"cmg": "276.01",
	"nrOfSatellites": 9,
	"mode": "3",
}
```


## Related

- [`live-icomera-position`](https://github.com/derhuerst/live-icomera-position) – Live vehicle geolocation, taken from the on-board Icomera WiFi system.
- [`record-ice-movement`](https://github.com/derhuerst/record-ice-movement) – Record the movement of any [ICE](https://en.wikipedia.org/wiki/Intercity-Express) using the on-board WiFi.
- [`record-tgv-movement`](https://github.com/derhuerst/record-tgv-movement) – Record the movement of any [TGV](https://en.wikipedia.org/wiki/TGV) using the on-board WiFi.


## Contributing

If you have a question or have difficulties using `record-flixbus-movement`, please double-check your code and setup first. If you think you have found a bug or want to propose a feature, refer to [the issues page](https://github.com/derhuerst/record-flixbus-movement/issues).
