Here are some commonly used String functions. 

You can see a couple of these in action in the Flode chart on the left. They all work in the same way, so feel free to experiment.

## Commonly used functions
The list below shows just a few of the available functions. To see them all, [click here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String). 

For the following examples, assume we have the following strings 
```
myString = 'Hello world - abcdefg'
searchString = 'world'
```

## String searching
- **String.charAt(pos)** - returns the character at the specified index. So `myString.charAt(1)` returns `e`.
- **String.indexOf(str)** - returns the index within the calling String object of the first occurrence of the specified value, or -1 if not found. So, `myString.indexOf(searchString)` would return `6`. `myString.indexOf('xyz')` would return `-1`.
- **String.lastIndexOf(str)** - returns the index within the calling String object of the last occurrence of the specified value, or -1 if not found. So, `myString.lastIndexOf('l')` would return `9`. `myString.lastIndexOf('z')` would return `-1`.
- **String.startsWith(str)** - determines whether a string begins with the characters of another string. `myString.startsWith(searchString)` would return `-1` whereas `myString.startsWith('Hello')` would return boolean `true`.
- **String.endsWith(str)** - determines whether a string ends with the characters of another string. Returns boolean `true` or `false`.
- **String.includes()** - determines whether one string may be found within another string. So `myString.includes('world')` returns the special *boolean* value `true`.
- **String.substr(startPos, count)** - returns the characters in a string beginning at the specified location through the specified number of characters. 
- **String.substring(startPos[, endPos])** - returns the characters in a string between two indexes into the string. If `endPos` is not specified it takes all character to the end of the string.


## Chopping up and joining strings
- **String.concat()** - combines the text of two or more strings and returns a new string. `myString.concat('hijk', '1234')` returns a new string `'Hello world - abcdefghijk1234'`.
- **String.slice()** - extracts a section of a string and returns a new string.
- **String.toLowerCase()** - returns the calling string value converted to lower case.
- **String.toUpperCase()** - returns the calling string value converted to uppercase.
- **String.trim()** - trims *whitespace* (space characters) from the beginning and end of the string.


