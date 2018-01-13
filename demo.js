const pgif = require('./index')

pgif('https://gifi.cagatay.me/1.pdf').then(filename => console.log(filename))
