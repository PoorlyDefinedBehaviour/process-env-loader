# About

Yet another env loader.

## Installation

$ [npm](https://www.npmjs.com) i process-env-loader

## Usage

```js
import load from "process-env-loader";
load(); // Loads .env from the root of the directory
```

```js
import load from "process-env-loader";
load("mypath/subfolder/"); // Loads .env from the specified folder
```

```js
import load from "process-env-loader";
// The key value pairs can be separated by anything, as long as you specify the separator when loading the file.
load("mypath/subfolder/", "->"); // Loads .env from the specified folder, using the specified seperator
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
