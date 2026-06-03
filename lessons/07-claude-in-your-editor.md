# 07 · Bringing Claude into your editor

> ⏱️ ~5 min · optional, mostly take-home

You've spent the day delegating to Claude Code in the terminal. That's the engine.
Now, if you like living in an editor, here's how to get the same superpowers right
next to your code, with **Cursor**.

Everything you learned still applies. This is the *same idea* (describe intent, read
the result) with a different surface. Use whichever fits the moment, lots of people
keep both open.

## Cursor in 60 seconds

Cursor is VS Code with an AI brain wired into every surface. Sign in (**Settings →
Models**) and pick a strong coding model. You can switch per-conversation: a bigger
model for gnarly tasks, a faster one for routine edits.

## The autonomy slider 🎚️

The key idea in the editor: three ways to invoke Claude, on a slider from "I'm
driving" to "you're driving."

| Surface | Shortcut | You're saying... | Best for |
|---------|----------|------------------|----------|
| **Tab** | just type | "finish my thought" | inline completions, repetitive edits |
| **Cmd+K** | `Cmd+K` | "edit *this* selection" | targeted, scoped changes |
| **Agent** | `Cmd+I` | "go do this whole task" | multi-file features, refactors, research |

- 🟢 **Tab**: start typing, it predicts the rest (often the next edit location too).
  Great for boilerplate and patterns. `Tab` to accept, `Esc` to dismiss.
- 🟡 **Cmd+K**: select code, give an instruction, get a scoped diff. "Convert this
  to async/await." It won't wander into other files, that containment is the feature.
- 🔵 **Agent**: describe a task; it reads files, plans, edits across the codebase,
  runs commands. This is basically Claude Code, *in the editor*. Read its plan and
  diffs, same review instinct as the terminal.

How to choose, fast:

```
Is it one spot I can point at?           → Cmd+K
Am I typing a pattern it can predict?     → Tab
Does it span files / need exploration?    → Agent
```

## Context in the editor: @-mentions

Where the terminal has you name files in prose, Cursor lets you `@`-mention them:

- `@file` / `@folder` / `@code` (a symbol)
- `@docs` to attach indexed documentation
- `@web` to search, `@git` for diffs and commit context

```
Refactor @src/cart.ts to match the patterns in @src/checkout.ts. Keep the public API identical.
```

## Rules in the editor: `.cursor/rules/`

Cursor's equivalent of `CLAUDE.md` is a `.cursor/rules/` directory, one `.mdc` file
per rule, scoped with globs:

```mdc
---
description: TypeScript conventions for this repo
globs: ["**/*.ts", "**/*.tsx"]
alwaysApply: false
---

- Use named exports only, no default exports.
- Prefer `type` over `interface`.
- Use date-fns for date math (already a dependency).
```

Same conventions-as-config idea you used with `CLAUDE.md`, just where Cursor looks
for it. (Many teams keep both files so the conventions travel with either tool.)

## Try it

1. Open a file in this repo and `Cmd+K` a single function: "add a JSDoc comment."
2. `Cmd+I` (Agent) and redo **Exercise 01's refactor** in the editor. Notice it's
   the same workflow you did in the terminal, plan, review, accept.
3. Add a `.cursor/rules/` file mirroring your `CLAUDE.md` and watch it get honored.

---

## 🎉 That's a wrap on Day 1!

You can now:
- Delegate whole tasks to **Claude Code** in the terminal 🖥️
- Steer with strong prompts, context, `CLAUDE.md`, and specs
- Package your workflows as **skills** and ship them as **plugins**
- Build reliably with **test-first** AI development
- Bring all of it into your **editor** when you want to

Tomorrow (Day 2) we *build* AI features with the Vercel AI SDK. Friday (Day 3) we
build agents. Come back! 💚🌲
