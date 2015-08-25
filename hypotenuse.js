
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'hypotenuse.flode';

var r = Math.round(Math.random() * 9 + 1);
var h = Math.round(Math.random() * 11 + 1);
var expected = Math.floor(Math.sqrt(r * r + h * h));

var out = testing.RunGraphWithInputs(script, [r, h]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(Math.floor(out[0]) == expected) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right.')
process.exit(1)
