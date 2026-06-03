# 02 · Prompting for code

> ⏱️ ~25 min

Prompting for code is different from chatting. Code has to *run*. Here's how to get
output you don't have to re-do, whether you're in the terminal or (later) the editor.

## The four ingredients of a good code prompt

1. **Goal**: what should be true when you're done?
2. **Context**: which files, types, conventions matter?
3. **Constraints**: language, libraries, "don't touch X", style.
4. **Done-condition**: how will we know it works? (tests? a command? a behavior?)

> 🍳 *Goal → Context → Constraints → Done.* Miss one and you'll
> iterate more.

### Weak prompt
```
make a function to handle users
```

### Strong prompt
```
Add `getActiveUsers(users: User[]): User[]` to src/users.ts.
"Active" = status === 'active' AND lastSeen within 30 days.
Use the existing User type, don't redefine it. Pure function, no I/O.
Add a couple of vitest cases covering the boundary at exactly 30 days.
```

Same idea, wildly different results. The second one tells Claude where to put it,
what "active" means, what *not* to do, and how to prove it works.

## Be specific about the boring stuff

Claude will happily invent a date library, a new error class, or a different naming
convention. Pin these down:

- "Use `date-fns`, it's already a dependency."
- "Match the error style in `src/errors.ts`."
- "camelCase, named exports, no default exports."

This is where **`CLAUDE.md` and rules** (lesson 03) save you from repeating yourself.

## Iterate like a pair, not a vending machine

You're not crafting one perfect prompt. You're having a conversation:

- "Close, but make it handle the empty array case."
- "Good. Now extract the date math into a helper."
- "Why did you choose a `Map` here?" *(asking is allowed and useful!)*

In the terminal, `Esc` to interrupt and redirect is part of this rhythm. You're
always in the loop.

## Anti-patterns to avoid

| Don't | Do |
|-------|-----|
| Accept a wall of code you didn't read | Read the diff before accepting |
| Say "fix it" with no detail | Paste the error and say what you expected |
| Let it rewrite working code unprompted | Scope the task narrowly |
| Trust invented APIs | Verify imports & method names exist |

## 🛠️ Exercise 01: Refactor a codebase

Time for your first real hands-on. In [`exercises/01-refactor/`](../exercises/01-refactor/)
you'll point Claude Code at a deliberately gnarly module and clean it up, with the
tests as your safety net. Practice the strong-prompt recipe and *read every diff*.

➡️ Next: [03 · Context & memory](./03-context-and-memory.md)
