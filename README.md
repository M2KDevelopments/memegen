# Memegen

Generate Memes with the help of API Meme Meme Generator.
Support the official API website <a href="https://apimeme.com/?ref=apilist.fun">here.</a>

<a href="https://www.buymeacoffee.com/m2kdevelopments" target="_blank">
<img src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" alt="Buy Me A Coffee" style="height: 60px !important;width: 217px !important;" />
</a>


## Installation
```
npm i memegen-m2k --save
```
or 
```
yarn add memegen-m2k
```


# How to use

## Import Library
```
const MemeGen = require('memegen-m2k');
```

## Get All the meme options
```
console.log(MemeGen.getMemeOptions().length)
```

## Generate Meme Image URL
```
const list = MemeGen.getMemeOptions();
const index = parseInt(Math.random() * list.length);
const meme = list[index]; // Pick one at random 

// top and bottom text of the meme
const topText = "When she says no"
const topBottom = "When he says no" 

// print out image link of the meme
console.log(MemeGen.generate(meme, topText, topBottom))
```