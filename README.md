## cooking-autoprefixer
> A cooking plugin.


## Usage

```javacript
cooking.set({
  //...
  extends: ['vue', 'autoprefixer']
})
```


```javascript
cooking.set({
  extends: [
    'vue',
    ['autoprefixer', {browsers: ['last 2 versions']}]
  ]
})
```

## License
MIT