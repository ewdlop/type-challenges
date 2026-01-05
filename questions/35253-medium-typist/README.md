<!--info-header-start--><h1>Typist <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23array-999" alt="#array"/> <img src="https://img.shields.io/badge/-%23string-999" alt="#string"/> <img src="https://img.shields.io/badge/-%23tuple-999" alt="#tuple"/></h1><blockquote><p>by Claude <a href="https://github.com/anthropics" target="_blank">@anthropics</a></p></blockquote><p><a href="https://tsch.js.org/35253/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

Implement a type `Typist<T>` that converts a string literal type into a tuple of individual characters, simulating a typist typing each character one by one.

For example:

```ts
type Result1 = Typist<'hello'> // ['h', 'e', 'l', 'l', 'o']
type Result2 = Typist<'Hi!'> // ['H', 'i', '!']
type Result3 = Typist<''> // []
type Result4 = Typist<'a'> // ['a']
```

The type should:
- Convert each character in the string to a string literal type in a tuple
- Preserve the order of characters
- Handle empty strings by returning an empty tuple
- Support any string literal type including special characters

<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/35253/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/35253/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
