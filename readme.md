# PGIF

PDF TO GIF or PDF TO PNG

# Usage

```javascript
const pgif = require('pgif')

pgif.pdf('https://gifi.cagatay.me/1.pdf').then(filename => console.log(filename))
pgif.thumbnail('https://gifi.cagatay.me/1.pdf').then(filename => console.log(filename))
```
