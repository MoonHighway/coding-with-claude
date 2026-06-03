# 03 · Context & memory

> ⏱️ ~20 min lesson + [Exercise 02](../exercises/02-feature/)

The #1 predictor of good AI output is **context**. Two ways to give Claude Code the
right context on purpose: point it at the right things, and give it standing
instructions it remembers.

## Pointing Claude at what matters

In the terminal, you bring context in by naming it:

- **Reference files directly** in your prompt: *"Refactor `src/cart.ts` to match the
  patterns in `src/checkout.ts`. Keep the public API identical."*
- **Let it explore**: *"Find where we validate orders and show me."* Claude searches
  the repo for you.
- **Paste errors and logs** straight in. Real output beats a vague description.

> 🧠 Tight, relevant context beats a giant pile. Name the two files that matter
> rather than waving at the whole repo.

## `CLAUDE.md`: the project's memory

Drop a `CLAUDE.md` in your repo root. Claude Code reads it every session, so you
stop re-explaining your conventions:

```md
# Project: cascadia-cart

## Conventions
- pnpm, not npm. Vitest for tests.
- Named exports only. Prefer `type` over `interface`.
- Use date-fns for date math (already a dependency).

## Commands
- `pnpm test` runs the suite
- `pnpm lint` must pass before any commit
```

If you find yourself typing the same correction twice, that's a line for
`CLAUDE.md`. Conventions-as-config: write it once, Claude follows it every time.

## Specs as context

Have a feature spec, a design doc, an issue? Drop it into the repo (e.g.
`/specs/feature.md`) and point Claude at it. It treats your spec as the source of
truth. A good spec answers:

- **What** are we building and **why**?
- **Inputs / outputs / edge cases**
- **What's explicitly out of scope**
- **How we'll know it's done** (the acceptance criteria)

> 🧠 Reframe: writing a crisp spec *is* prompting. The clearer the spec, the less
> babysitting the implementation needs.

## Keeping Claude current

Libraries move fast (today is 2026!). When you're using a version Claude might not
know cold, point it at the real docs: paste a docs URL, drop the relevant docs into
the repo, or let it fetch what it needs. Don't trust training data for fast-moving
APIs, give it the current source.

## 🛠️ Exercise 02: Build a feature end-to-end

In [`exercises/02-feature/`](../exercises/02-feature/) you'll write a short **spec**,
add a **`CLAUDE.md`**, and drive Claude Code to build a feature end-to-end. Then
you'll review and refine like a senior would. The spec does the heavy lifting.

➡️ Next: [04 · Writing Claude Skills](./04-skills.md)
