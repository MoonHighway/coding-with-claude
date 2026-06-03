# Exercise 02 · Build a feature end-to-end 🚀

**Goal:** ship a real feature with Claude Code, driven by a **spec** and a
**`CLAUDE.md`**, planned before built, reviewed like a senior.

This is the full loop: *spec → conventions → plan → build → review → refine.*

## The feature

You're adding a **gift-card redemption** capability to the orders module.

The spec is already written for you: [`SPEC.md`](./SPEC.md). Read it first, it's
your source of truth. (In real life *you'd* write this; today we provide it so we
can focus on the workflow.)

## Steps

1. **Read the spec.** Skim `SPEC.md` so you know what "done" means.
2. **Check the conventions.** There's a `CLAUDE.md` in `starter/`, Claude Code reads
   it automatically. Open it, tweak if you like.
3. **Plan first.** Start Claude Code in `starter/` and ask it to plan, not build:
   ```bash
   cd exercises/02-feature/starter
   claude
   > Read SPEC.md. Plan how you'd implement the feature in giftcard.ts,
     following CLAUDE.md. Write vitest tests for every acceptance criterion.
     Show me the plan before writing any code.
   ```
4. **Review the plan.** Does it cover every acceptance criterion? Push back if not.
5. **Let it build**, then **read every diff.** You're the reviewer now.
6. **Run the tests:** `pnpm test exercises/02-feature`
7. **Refine.** Ask for one improvement ("extract the validation", "handle a
   zero-balance card") and watch it iterate.

## Done when

- Every acceptance criterion in `SPEC.md` has a passing test ✅
- The code follows your `CLAUDE.md` (named exports, etc.)
- You planned first and reviewed the diff rather than blind-accepting it

## Reflect 🤔

How much did the spec do the heavy lifting? A crisp spec turned a vague feature into
something Claude could nail. **Writing the spec *is* the work.**

> 💡 **Prefer the editor?** The same job works in Cursor with a `.cursor/rules/` file
> (there's one in `starter/.cursor/rules/`) and Agent mode, see
> [lesson 07](../../lessons/07-claude-in-your-editor.md).
>
> `solution/` has a reference implementation + tests.
