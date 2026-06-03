# Exercise 01 · Refactor a codebase 🧹

**Goal:** clean up a deliberately gnarly module with **Claude Code in the terminal**,
practicing the strong-prompt recipe and the "read every diff" habit.

## The patient

`starter/orders.ts` works (the tests in `orders.test.ts` pass) but it's rough:
- `any` everywhere
- a 40-line function doing five jobs
- duplicated logic
- mystery variable names
- zero comments where they'd actually help

## Your mission

Refactor it to be clean and well-typed **without breaking the tests.**

Run the tests first so you have a safety net:

```bash
pnpm test exercises/01-refactor
```

Now start Claude Code in this folder and drive the refactor:

```bash
cd exercises/01-refactor
claude
```

Try this progression, reading the diff at each step:

1. **Plan first.** *"Plan how you'd refactor starter/orders.ts for readability and
   type safety. Keep the public API and all tests passing. Don't write code yet."*
   Read the plan, push back if it misses something.
2. **Execute.** *"Go ahead. Split `calculateTotal` into small, single-purpose
   functions and replace every `any` with a proper `Order` / `LineItem` type."*
3. **Verify.** *"Run `pnpm test exercises/01-refactor` and confirm it's green."*
4. **Tighten.** Ask for one more improvement ("extract the tax math into a helper")
   and watch it iterate.

## Done when

- `pnpm test exercises/01-refactor` is still green ✅
- No more `any`
- `calculateTotal` reads top-to-bottom with helpers doing the dirty work
- You planned before executing, and read each diff before accepting

## Reflect 🤔

Where did planning first save you from an over-eager rewrite? When did you have to
steer (`Esc` and redirect)? That instinct, delegate then verify, is the real takeaway.

> 💡 **Prefer the editor?** You can do this exact refactor in Cursor with Agent mode
> instead, that's covered in [lesson 07](../../lessons/07-claude-in-your-editor.md).
>
> `solution/` has one cleaned-up version. Peek if stuck, but yours may be nicer.
