# is-gst
## Best GST Validator NPM Package.
[![Build Status](https://travis-ci.org/joemccann/dillinger.svg?branch=master)](https://travis-ci.org/joemccann/dillinger) \
Jai Hind 🇮🇳 \
is-gst is an npm package to validate the GST number format for a GST Number.

- Simple Implementation.
- Easy Usage.

## Usage
- Pass the GST number to isGST() Function. Get the Boolean Result.
## Installation
Install the package using npm. 
```sh
npm install is-gst
```
## Usage
#### For JavaScript
```
let GSTValidator = require("is-gst");
//You can use Import also.
import { isGST } from "is-gst";
let isGSTNumber=GSTValidator.isGST(gstNumber);
```
#### For TypeScript
```
import { isGST } from "is-gst";
let isGSTNumber=isGST(gstNumber);
```
## License
MIT
