# 04 · Writing Claude Skills

> ⏱️ ~15 min lesson + [Exercise 03](../exercises/03-skill/)

You've got a workflow you do the same way every time: generate a component, write a
changelog entry, scaffold a route with its test. Stop re-explaining it. Package it
as a **Skill**.

## What a skill is

A skill is a folder with a `SKILL.md` that teaches Claude *how you do a thing*. When
a task matches the skill's description, Claude pulls it in and follows it.

Two flavors:
- **Capability uplift**: gives Claude an ability it doesn't have by default (e.g.
  "generate a PDF", "scrape this internal tool").
- **Encoded preference**: guides Claude to do something it *can* already do, but
  *your* way (e.g. "scaffold a React component the way this team likes").

> Rule of thumb: *if you keep pasting the same playbook into chat, it's a skill.*

## Anatomy

```
.claude/
└── skills/
    └── new-component/
        ├── SKILL.md          # the instructions (required)
        └── template.tsx      # optional supporting files
```

```md
---
name: new-component
description: Scaffold a React component the cascadia way. Use when asked to create a new component.
---

# New Component

When asked to create a component named `<Name>`:

1. Create `src/components/<Name>/<Name>.tsx` (named export, props typed with `type`).
2. Create `src/components/<Name>/<Name>.test.tsx` with a render smoke test (vitest + testing-library).
3. Add an `index.ts` re-export.
4. Keep styles in a colocated `<Name>.module.css`.

Match the patterns in `src/components/Button/`.
```

The **`description`** is the most important line. It's how Claude decides when to
reach for the skill. Make it concrete and include trigger words ("use when...").

## Why skills beat a long `CLAUDE.md`

- **Loaded on demand**: they don't clutter context until they're relevant.
- **Composable & shareable**: drop them in a repo, share with the team.
- **Focused**: one skill, one job. Easy to test and improve.

## Skills vs. CLAUDE.md vs. subagents (the cheat sheet)

| Tool | Lives in | For |
|------|----------|-----|
| `CLAUDE.md` | repo root | always-on conventions |
| **Skill** | `.claude/skills/` | a repeatable *procedure*, loaded when relevant |
| Subagent | `.claude/agents/` | isolated work in its own context window |
| Hook | settings | deterministic automation on events |

## 🛠️ Exercise 03: Build a skill

In [`exercises/03-skill/`](../exercises/03-skill/) you'll write a real skill that
scaffolds something useful, then watch Claude Code invoke it. Bring a workflow you
personally repeat, that's the best skill to build.

➡️ Next: [05 · Packaging it up: plugins](./05-plugins.md)
