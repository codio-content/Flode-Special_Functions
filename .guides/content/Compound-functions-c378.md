You can compound several functions into a single Flode block. For example, let's say we have the following challenge ...

> Calculate for x and y inputs, $ \sqrt x + y^3 $ rounded to the nearest whole number. 

You could use two expressions ...

```javascript
x = Math.sqrt(x)
y = Math.pow(y, 3)
result = Math.round(x + y)
```

But you can actually write this as a single expression

```javascript
result = Math.round( Math.sqrt(x) + Math.pow(y, 3) )
```

