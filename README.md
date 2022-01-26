# is-gst

## Best GST Validator NPM Package.

[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) \
Jai Hind 🇮🇳 \
`is-gst` is an npm package to validate the GST number format for a GST Number.

> **WARNING**: This package does not checks in GST Database for valid GST or Not.

- Simple Implementation.
- Easy Usage.

---

## Installation

Install the package from npmjs.com.

```sh
npm install is-gst
```

Install the package from github.com

```sh
npm install https://github.com/PranavVS/is-gst.git#main
```

---

## Usage

- Pass the GST number to `isGST()` Function. Get the Boolean result.

```
import { isGST } from "is-gst";
let isGSTNumber=isGST(gstNumber);
```

---

## License

### MIT

---

## Errors You may Encounter

Please check in package.json for the `"type": "module" ` . You may encounter error if not specified.
