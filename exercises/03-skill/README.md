# Exercise 03 · Build a Claude Skill 🧩

**Goal:** write a real, working skill that Claude Code invokes for you: then watch
it fire on a matching request.

We'll build a skill that scaffolds a **new API route** (handler + test + types) the
same way every time. Then you'll adapt it to a workflow *you* actually repeat.

## Steps

1. **Look at the example.** This folder has a ready-to-study skill at
   [`.claude/skills/new-route/SKILL.md`](./.claude/skills/new-route/SKILL.md).
   Read it: notice the `description` line is what triggers it.

2. **Try it.** From this `03-skill/` directory, start Claude Code:
   ```bash
   cd exercises/03-skill
   claude
   > Create a new route called "orders" that returns a list of orders.
   ```
   Claude should recognize the request matches the `new-route` skill and follow
   its steps. Watch it scaffold the files.

3. **Improve it.** Edit `SKILL.md`: add a step (validation? a logger?), tighten the
   `description`, or add a template file. Re-run and see the behavior change.

4. **Make it yours.** Create a *second* skill in `.claude/skills/` for something
   you personally do on repeat, changelog entries, a component, a migration,
   whatever. Best skill = a chore you're tired of explaining.

## Done when

- The `new-route` skill fires on a matching prompt and scaffolds files ✅
- You've modified it and seen the output change
- You've written one original skill of your own

## Reflect 🤔

What's the difference between this skill and just putting the same text in
`CLAUDE.md`? (Hint: skills load *on demand* and stay focused, your context stays
clean until the skill is actually relevant.)

---

## 🎁 Level up, package it as a plugin (capstone for [lesson 05](../../lessons/05-plugins.md))

A skill in `.claude/` is yours alone. Wrap it in a **plugin** and it's shareable,
versioned, and installable by your whole team with one command.

A worked example is in [`example-plugin/`](./example-plugin/): the same
`new-route` skill with a `plugin.json` manifest. Try it:

```bash
cd example-plugin
claude --plugin-dir ./cascadia-toolkit
# inside Claude Code, note the namespace:
/cascadia-toolkit:new-route orders
```

**Your turn:**
1. Convert *your* original skill into a plugin (manifest + `skills/` folder).
2. Load it with `--plugin-dir` and invoke it by its `:namespaced` name.
3. Bonus: bundle a "tests before stop" hook (lesson 01) via `hooks/hooks.json`.

That's every Claude Code concept from today, skills, hooks, subagents, bundled
into one installable package. 🎁
