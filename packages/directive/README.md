# vue-sticky-next

vue-sticky-next is a powerful vue2 and vue3 directive make element sticky.

- [vue-sticky-next](#vue-sticky-next)
  - [Install](#install)
    - [Vue2 \& Vue3 Plugin](#vue2--vue3-plugin)
  - [createDirective API](#createdirective-api)
  - [Usage](#usage)
  - [Options](#options)
  - [License](#license)

## Install

```Bash
npm install vue-sticky-next --save
```

### Vue2 & Vue3 Plugin

```js
import { vStickyPlugin } from 'vue-sticky-next'

Vue.use(vStickyPlugin)
```

## createDirective API

```js
import { createDirective } from 'vue-sticky-next'

const { vSticky } = createDirective(
  {
    /* default options */
  },
  'vue3' /* vue2 */
)
```

## Usage

Use `v-sticky` directive to enable element postion sticky, and use `sticky-*` attributes to define its options. Sticky element will find its nearest element with `sticky-container` attribute or its parent node if faild as the releative element.

[basic example](https://mehwww.github.io/vue-sticky-next/examples/basic/)

```html
<div sticky-container>
  <div
    v-sticky="{ offset: {
    top:0
  }, side:'top' }"
  >
    ...
  </div>
</div>
```

## Options

`v-sticky` Options:

- `offset` - set sticky offset, it support a vm variable name or a js expression like `{top: 10, bottom: 20}`
  - `top`_(number)_ - set the top breakpoint (default: `0`)
  - `bottom`_(number)_ - set the bottom breakpoint (default: `0`)
- `side`_(string)_ - decide which side should be sticky, you can set `top`、`bottom` or `both` (default: `top`)
- `zIndex` _(number)_ - to set the z-index of element to stick
- `onStick` _(function)_ - callback when sticky and release, receiveing 1 argument with object indicating the state, like:

An expression that evaluates to false set on `v-sticky` can be used to disable stickiness condtionally.

```HTML
<div sticky-container>
  <div v-sticky="shouldStick">
    ...
  </div>
</div>
```

```JavaScript
export defaults {
  data () {
    shouldStick: false
  }
}
```

## License

MIT
