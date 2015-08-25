
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'round.flode';

var n = Math.random() * 20;

var out = testing.RunGraphWithInputs(script, [n]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == 3 && out[0] == Math.round(n) && out[1] == Math.ceil(n) && out[2] == Math.floor(n))  {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right.')
process.exit(1)
