# tiny-clipbord

## Introduction

> A tiny copy to clipboard library, without any dependence. It is small(only 1.3k) and Simple to use in javascript.

## Features

-   small
-   simple
-   useful

## Usage

```
# install
npm install tiny-clipbord --save
```

```js
import TinyClipbord from 'tiny-clipbord'

TinyClipbord.copy(text, callback)
```

or you can use it by script tag

```html
<script src="https://unpkg.com/tiny-clipbord@0.0.1/libs/tiny-clipbord.umd.min.js"></script>
<script>
   TinyClipbord.copy(text, callback) 
</script>
```

## Methods

- `TinyClipbord.copy(text, callback)`

    - text: the text you want to copy

    - callback(error ?) After copying successfully it will be run, and when appear error that will throw the error

- `TinyClipbord.getHistory()`

    - return String[], the history that you have copied

- `TinyClipbord.clearHistroy()` clear the history

## Browser Support

![Chrome](https://raw.github.com/alrra/browser-logos/master/src/chrome/chrome_48x48.png) | ![Firefox](https://raw.github.com/alrra/browser-logos/master/src/firefox/firefox_48x48.png) | ![Safari](https://raw.github.com/alrra/browser-logos/master/src/safari/safari_48x48.png) | ![Opera](https://raw.github.com/alrra/browser-logos/master/src/opera/opera_48x48.png) | ![Edge](https://raw.github.com/alrra/browser-logos/master/src/edge/edge_48x48.png) | <img src="https://clipboardjs.com/assets/images/ie.png" width="48px" height="48px" alt="Internet Explorer logo">|
--- | --- | --- | --- | --- |--- |
42+ ✔ | 41+ ✔ | 10+ ✔ | 29+ ✔ | 12+ ✔ | 9+ ✔ |

## Contributing

- ⇄ Pull requests and ★ Stars are always welcome.
- For bugs and feature requests, please create an issue.

## License

MIT Licensed © suporka

## Questions or advise

If you have some question or advise, you can send me a E-mail(zxpscau@163.com).