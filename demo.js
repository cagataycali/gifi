const pgif = require('./index')

pgif.pdf('https://gifi.cagatay.me/1.pdf').then(filename => console.log(filename))
pgif.thumbnail('https://gifi.cagatay.me/1.pdf').then(filename => console.log(filename))
