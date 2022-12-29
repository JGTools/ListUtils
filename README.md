# ListUtils

[![npm](https://img.shields.io/npm/v/@jgtools/listutils)](https://www.npmjs.com/package/@jgtools/listutils)
[![npm](https://img.shields.io/npm/dm/@jgtools/listutils)](https://www.npmjs.com/package/@jgtools/listutils)
[![GitHub](https://img.shields.io/github/license/jgtools/listutils)](https://github.com/git/git-scm.com/blob/main/MIT-LICENSE.txt)

Utility functions for lists

## Installation

### Using npm

```bash
npm i @jgtools/listutils
```

```javascript
import { remove } from "@jgtools/listutils";
// ...
```

### Using cdn

```html
<script type="module">
    import  {remove} from "https://cdn.jsdelivr.net/npm/@jgtools/listutils@1.0.0/dist/index.min.js";
    // ...
</script>
```

## Usage

```javascript
import { remove } from "@jgtools/listutils";

const list = [1, 2, 3];
const removed = remove(list, (e) => {
  return e == 2;
});
console.log(list);
console.log(removed);
```

## License

MIT
