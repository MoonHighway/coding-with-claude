# Exercise 04 · TDD a feature with Claude Code 🔴🟢🛠️

**Goal:** drive Claude Code through red → green → refactor: without ever editing
the tests. The tests are the spec; Claude's job is to make them pass.

## The setup

`starter/slugify.ts` is an **empty stub**. `starter/slugify.test.ts` is a full set
of tests describing a `slugify()` function: and they're **failing on purpose**
(red). 🔴

Run them and watch them fail for the *right reason*:

```bash
pnpm test exercises/04-tdd
```

## The loop

1. **Read the tests.** They are the specification. Understand what `slugify`
   should do before you let Claude touch anything.

2. 🟢 **Green.** Start Claude Code in this folder and say:
   ```bash
   cd exercises/04-tdd
   claude
   > Make the tests in starter/slugify.test.ts pass by implementing
     starter/slugify.ts. Do NOT modify the test file. Run the tests to confirm.
   ```
   Let it implement and run the suite until green.

3. 🛠️ **Refactor.** Once green:
   ```
   > Refactor slugify.ts for readability. The tests must stay green.
   ```

4. 🔴 **Your turn to write a test.** Add one new `it(...)` case for a behavior you
   care about (emoji? leading numbers? a max length?). Watch it go red, then send
   Claude back around the loop.

## The one rule

**You own the tests. Claude owns the implementation.** Never let Claude edit the
test to make it pass, that's how you "succeed" at shipping a bug. 😅

## Bonus: make it self-policing

Add a hook (or just a `CLAUDE.md` note) that runs `pnpm test` before Claude is
allowed to declare it's done. Now the red-green loop enforces itself.

## Done when

- All starter tests pass without the test file being modified ✅
- You added at least one test of your own and made it pass
- `slugify.ts` is clean and readable

> `solution/` has a reference implementation.
