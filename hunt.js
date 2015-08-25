
var script = 'hunt.flode';

var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var input = ['one', '12red', 'three', 'red', '12red', 'last']
var expected = [1, 3, 4]

// console.log(expected)

var out = testing.RunGraphWithInputs(script, [input]);

// console.log(out)

if(out.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

if(out.length == expected.length) {
  for(var i = 0; i < expected.length; i++) {
    if(typeof out[i] == 'undefined' || out[i] != expected[i]) {
      console.log('Not quite right');
      process.exit(1)
    }
  } 
 
  console.log('Well done!')
  process.exit(0)
}

console.log('Not quite right, make sure you are handling all scenarios.')
process.exit(1)
