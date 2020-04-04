<div
  align="center"
>

# line-notify

**This module makes it easy to use LINE Notify.**

![LICENCE](https://img.shields.io/github/license/InkoHX/line-notify?label=LICENCE&style=flat-square)
![GitHub repo size](https://img.shields.io/github/repo-size/InkoHX/line-notify)

</div>

## Example of usage

```ts
import { LineNotify } from '@inkohx/line-notify'

const notify = new LineNotify('token here')

notify.send('Hello World')
  .catch(console.error)
```

## Feature

- MessageBuilder
  - [ ] setImage
  - [x] setThumbnail
  - [x] setNotification
  - [x] setSticker
  - [x] setMessage
