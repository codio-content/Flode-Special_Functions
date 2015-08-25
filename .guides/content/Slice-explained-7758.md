The `slice()` function extracts a portion of a string in various ways.

It is similar to `substr()` but not the same.

- `substr(start, count)` extracts from `count` characters starting at the position `start`.
- whereas `slice(start, end)` extracts starting at the index `start` and ending at the index `end`.

## Simple use case
This is a standard use case.

```javascript
str = 'The morning is upon us.'
newStr = str.slice(4, 11)
```

`newStr` will contain `morning`. We are slicing from the 5th character from the start of the string (don't forget that the 1st character is position 0, just like arrays) up to an **excluding** the 12th character.


## Negative values
Negative values means you want to look from the **end** of the string, not the start.

```javascript
str = 'The morning is upon us.'
newStr = str.slice(4, -12)
```

`newStr` will contain `morning` again. The `-12` means 'counting backwards from the end of the string.

We can also use negative values in both cases, so

```javascript
str = 'The morning is upon us.'
newStr = str.slice(-19, -12)
```

`newStr` will contain `morning` yet again. We start from 19 from the end and slice until 12 from the end.

## Play
Play around with the Flode chart on the left. Chop and change some values to get a feel for it.
