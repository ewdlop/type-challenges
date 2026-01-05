import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  // Perfect match - all characters typed correctly
  Expect<Equal<TypingGame<'hello', 'hello'>, true>>,

  // Incomplete typing - not all characters typed yet
  Expect<Equal<TypingGame<'hello', 'hel'>, false>>,

  // Incorrect typing - wrong character
  Expect<Equal<TypingGame<'hello', 'hallo'>, false>>,

  // Empty strings
  Expect<Equal<TypingGame<'', ''>, true>>,

  // Empty typed, non-empty target
  Expect<Equal<TypingGame<'hello', ''>, false>>,

  // Typing more than target
  Expect<Equal<TypingGame<'hello', 'hello world'>, false>>,

  // Single character match
  Expect<Equal<TypingGame<'a', 'a'>, true>>,

  // Single character mismatch
  Expect<Equal<TypingGame<'a', 'b'>, false>>,

  // Numbers and special characters
  Expect<Equal<TypingGame<'123', '123'>, true>>,
  Expect<Equal<TypingGame<'test@123', 'test@123'>, true>>,

  // Case sensitive
  Expect<Equal<TypingGame<'Hello', 'hello'>, false>>,

  // Spaces matter
  Expect<Equal<TypingGame<'hello world', 'hello world'>, true>>,
  Expect<Equal<TypingGame<'hello world', 'helloworld'>, false>>,

  // Longer string
  Expect<Equal<TypingGame<'The quick brown fox', 'The quick brown fox'>, true>>,
  Expect<Equal<TypingGame<'The quick brown fox', 'The quick brown fo'>, false>>,
]
