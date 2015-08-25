
var testing = require('/home/codio/workspace/.guides/test-fw/testing')

var script = 'search-slice.flode';


var input = [999, 1,999]
var expected = [1]
var output = testing.RunGraphWithInputs(script, [input]);

// console.log(expected)
// console.log(out)

if(output.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

var out = output[0];

if(out.length == expected.length) {
  for(var i = 0; i < expected.length; i++) {
    if(typeof out[i] == 'undefined' || out[i] != expected[i]) {
      console.log('Not quite right');
      process.exit(1)
    }
  } 
}

// two

input = [1, 999, 1, 2]
expected = [1, 2]
var output = testing.RunGraphWithInputs(script, [input]);

if(output.length == 0) {
  console.log("Your program isn't outputting anything.")
  process.exit(1)
}

out = output[1];

// console.log(expected)
// console.log(out)

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
