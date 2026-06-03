# 06 · Test-driven development with Claude

> ⏱️ ~20 min lesson + [Exercise 04](../exercises/04-tdd/)

Here's the plot twist that makes agentic coding *reliable*: **write the tests
first.** Tests are the perfect spec, unambiguous, executable, and they tell Claude
(and you) exactly when the job is done.

## Why TDD + AI is a power couple

An agent's biggest weakness is *knowing when it's actually finished*. A failing test
is an objective, machine-checkable answer. So the loop becomes:

```
🔴 RED      You write a failing test (the spec)
🟢 GREEN    Claude writes just enough code to pass it
🛠️ REFACTOR Claude cleans up, tests stay green the whole time
```

The tests are the guardrail. Claude can iterate freely because crossing the line
into "broken" is instantly visible.

## The workflow, concretely

1. **You** describe the behavior as a test (or ask Claude to draft the test, then
   *you* verify it expresses what you actually want, this part is yours).
2. Run it. Watch it fail for the *right reason*. 🔴
3. Tell Claude: *"Make this test pass. Don't change the test."* 🟢
4. Once green: *"Refactor for clarity. Tests must stay green."* 🛠️
5. Repeat for the next behavior.

> 🔒 The golden rule: **Claude implements, you own the test.** If you let Claude
> both write the test and the code with no review, you've just automated writing
> bugs that pass their own exam.

## Tests as specifications

A good test suite reads like a description of the feature:

```ts
describe('parsePrice', () => {
  it('parses a plain dollar amount', () => {
    expect(parsePrice('$12.50')).toBe(1250); // cents
  });
  it('handles missing cents', () => {
    expect(parsePrice('$12')).toBe(1200);
  });
  it('throws on garbage input', () => {
    expect(() => parsePrice('banana')).toThrow();
  });
});
```

Hand Claude *that* and "make it pass," and you'll get exactly the function you
meant, including the edge cases, because you spelled them out.

## Pairs beautifully with hooks

Remember hooks from lesson 01? A "run `pnpm test` before stopping" hook turns the
red-green loop into a *guarantee*: Claude literally can't declare victory while a
test is red. TDD + hooks = an agent that polices itself.

## 🛠️ Exercise 04: TDD a feature with Claude Code

In [`exercises/04-tdd/`](../exercises/04-tdd/) you've got a starter with tests
already written and **failing on purpose**. Your job: drive Claude Code through
red → green → refactor without ever editing the tests. Then write one more test
yourself and do another lap.

➡️ Next: [07 · Bringing Claude into your editor](./07-claude-in-your-editor.md)
