
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'random.flode';

var out = testing.RunGraphWithInputs(script, []);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out[0] == Math.round(out[0]) && out[0] >= 0 && out[0] <= 10) {
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right.')
process.exit(1)
