# SassDoc Loader For Webpack

The only up-to-date package.

## Installation

```
npm i -D @advclb/sassdoc-loader
```

Inline usage:

```js
import doc from "!!@advclb/sassdoc-loader!./mixins.scss";
```

Global usage:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: "@advclb/sassdoc-loader",
      },
    ],
  },
};
```

With configuration:

```js
// webpack.config.js
module.exports = {
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          {
            loader: "@advclb/sassdoc-loader",
            options: {
              groups: {
                layout: "Layouts",
                helpers: "Helpers",
                undefined: "Utilities",
              },
              verbose: true,
            },
          },
        ],
      },
    ],
  },
};
```

[See full SassDoc configuration](http://sassdoc.com/configuration/)

## Copyright

Guo Yunhe

## License

GNU General Public License version 3
