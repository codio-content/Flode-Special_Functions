
var script = 'slice.flode';

var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var input = ['111#one#111', '#two', 'three#', '#four#']
var expected = ['one', 'invalid', 'invalid', 'four']

// console.log(expected)

var out = testing.RunGraphWithInputs(script, [input]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out[0].length == expected.length) {
  for(var i = 0; i < expected.length; i++) {
    if(typeof out[0][i] == 'undefined' || out[0][i] != expected[i]) {
      console.log('Not quite right');
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you are handling all scenarios.')
process.exit(1)
