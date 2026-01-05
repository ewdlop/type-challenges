import type { Equal, Expect } from '@type-challenges/utils'

type cases = [
  Expect<Equal<Typist<'hello'>, ['h', 'e', 'l', 'l', 'o']>>,
  Expect<Equal<Typist<'Hi!'>, ['H', 'i', '!']>>,
  Expect<Equal<Typist<''>, []>>,
  Expect<Equal<Typist<'a'>, ['a']>>,
  Expect<Equal<Typist<'TypeScript'>, ['T', 'y', 'p', 'e', 'S', 'c', 'r', 'i', 'p', 't']>>,
  Expect<Equal<Typist<'123'>, ['1', '2', '3']>>,
  Expect<Equal<Typist<'  '>, [' ', ' ']>>,
  Expect<Equal<Typist<'@#$%'>, ['@', '#', '$', '%']>>,
  Expect<Equal<Typist<'a b c'>, ['a', ' ', 'b', ' ', 'c']>>,
  Expect<Equal<Typist<'🎉'>, ['🎉']>>,
]
