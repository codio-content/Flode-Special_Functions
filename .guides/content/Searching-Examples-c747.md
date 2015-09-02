One of the really useful things you can do with string functions is to search them.

Take a look at the Flode chart on the left. 

This shows an array being input. We need to perform the following clean up tasks on the array.

1. Searching for the color 'red' in the string
1. If it's there, remove it but leave the other colors

Note that we need to be careful about whether red appears as the first or last word in the colors or somewhere in the middle.

Step through this example and watch the variables carefully to see what's going on.

Note that `indexOf()` is the function that does the searching. It returns the position within the string if found or a -1 if not found.