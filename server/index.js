const Dragon = require('./dragon');

const fooey = new Dragon({ birthdate: '10-15-1988', nickname: 'fooey' });

const fooey2 = new Dragon();
console.log('Fooey: ', fooey);
console.log('Fooey2: ', fooey2);
