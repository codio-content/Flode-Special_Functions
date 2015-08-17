nYou can compound several functions into a single Flode block. For example, let's say we have the following challenge ...

> Calculate the square root of `x` rounded to the nearest whole number. 

You could use two expressions ...

```javascript
temp = Math.sqrt(x)
result = Math.round(temp)
```

But you can actually write this as a single expression

```javascript
result = Math.round( Math.sqrt(x) )
```

The 