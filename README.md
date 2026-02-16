# Simple Case Converter 
![npm](https://img.shields.io/npm/v/simple-case-converter)
![license](https://img.shields.io/npm/l/simple-case-converter)

A lightweight utility for converting strings into sentence case or capitalized word format. Built with simplicity, predictability, and zero dependencies in mind.

## ✨ Features
- Convert text to sentence case
- Capitalize each word
- Optional period handling
- Input validation
- Zero dependencies
- Lightweight & easy to use

## 📦 Installation
```bash
npm install simple-case-converter
```

## 🚀 Usage
```javascript
const { sentenceCase, capitalizeEachWord } = require('simple-case-converter');

// Sentence case
console.log(sentenceCase('hello world'));
// "Hello world"

// Sentence case with period
console.log(sentenceCase('hello world', { period: true }));
// "Hello world."

// Capitalize each word
console.log(capitalizeEachWord('hello world'));
// "Hello World"

// Capitalize each word with period
console.log(capitalizeEachWord('hello world', { period: true }));
// "Hello World."
```

## ⚠ Error Handling
Throws a TypeError if the input is not a string.
```javascript
sentenceCase(123);
// TypeError: Parameter must be a string
```

## 📄 License
MIT