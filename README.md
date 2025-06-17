# webpack-test

1. `npm install`
2. `npx webpack`

result:

```text
ERROR in ./src/index.js 13:15
Module parse failed: Unexpected token (13:15)
You may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders
|
|     // this does not work:
>     await using(input, async () => {});
| }
|
```
