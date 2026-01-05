<!--info-header-start--><h1>Typing Game <img src="https://img.shields.io/badge/-medium-d9901a" alt="medium"/> <img src="https://img.shields.io/badge/-%23string-999" alt="#string"/> <img src="https://img.shields.io/badge/-%23game-999" alt="#game"/> <img src="https://img.shields.io/badge/-%23template--literal-999" alt="#template-literal"/></h1><blockquote><p>by ewdlop <a href="https://github.com/ewdlop" target="_blank">@ewdlop</a></p></blockquote><p><a href="https://tsch.js.org/35300/play" target="_blank"><img src="https://img.shields.io/badge/-Take%20the%20Challenge-3178c6?logo=typescript&logoColor=white" alt="Take the Challenge"/></a> </p><!--info-header-end-->

### Typing Game

Implement a type `TypingGame<Target, Typed>` that simulates a typing game. The type should return `true` if the `Typed` string exactly matches the `Target` string, and `false` otherwise.

In a typing game, players need to type out a target string exactly as shown. Your type should validate whether what the player typed matches the target perfectly.

#### Rules:
- The comparison is case-sensitive
- Spaces and special characters must match exactly
- The typed string must be exactly the same length as the target
- Empty strings are considered a match

#### Examples:

```ts
type Result1 = TypingGame<'hello', 'hello'>  // true
type Result2 = TypingGame<'hello', 'hel'>    // false (incomplete)
type Result3 = TypingGame<'hello', 'hallo'>  // false (wrong character)
type Result4 = TypingGame<'', ''>            // true (empty strings match)
```

This challenge tests your understanding of:
- String comparison in TypeScript's type system
- Template literal types
- Conditional types

Good luck, and happy typing! 🎮⌨️


<!--info-footer-start--><br><a href="../../README.md" target="_blank"><img src="https://img.shields.io/badge/-Back-grey" alt="Back"/></a> <a href="https://tsch.js.org/35300/answer" target="_blank"><img src="https://img.shields.io/badge/-Share%20your%20Solutions-teal" alt="Share your Solutions"/></a> <a href="https://tsch.js.org/35300/solutions" target="_blank"><img src="https://img.shields.io/badge/-Check%20out%20Solutions-de5a77?logo=awesome-lists&logoColor=white" alt="Check out Solutions"/></a> <!--info-footer-end-->
