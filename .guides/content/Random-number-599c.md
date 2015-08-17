Before you take this challenge, let's talk a bit about the random number function `Math.random()`.

This function returns a random number between 0 and 1, so `0.733544322` for example.

What if I want a random number between 0 and 100? The answer is to simply multuply the result by 100, so `Math.random * 100`.

Beware, though! `0.733544322 * 100` is `73.3544322` and in some cases you want an integer, not a *float* (which is the geeky expression for a floating point number).

{Check It!|assessment}(test-4086882628)
