# 05 · Packaging it up: Claude Code plugins

> ⏱️ ~15 min lesson + [Exercise 03 (Level up)](../exercises/03-skill/)

You built a skill in lesson 04. It lives in *your* `.claude/` folder. Now: how do
you share it with your team, or the world? You package it as a **plugin**.

## Standalone vs. plugin

| | Standalone (`.claude/`) | Plugin |
|--|------------------------|--------|
| Scope | one project, just you | shareable, versioned, reusable |
| Skill name | `/hello` | `/my-plugin:hello` (namespaced) |
| Distribute | copy-paste | `/plugin install` from a marketplace |

> Workflow: prototype in `.claude/` (fast), then **convert to a plugin** when it's
> good enough to share. You already did the hard part: the skill.

## Anatomy of a plugin

A plugin is a directory with a manifest plus the same building blocks you already
know (skills, agents, hooks, even MCP servers) bundled together:

```
my-plugin/
├── .claude-plugin/
│   └── plugin.json        # the manifest (ONLY this goes in .claude-plugin/)
├── skills/
│   └── new-route/
│       └── SKILL.md        # your lesson-04 skill, now shippable
├── agents/                 # optional: subagents
├── hooks/
│   └── hooks.json          # optional: your "tests before stop" hook
└── .mcp.json               # optional: MCP servers the plugin provides
```

> ⚠️ Gotcha: **only `plugin.json` goes inside `.claude-plugin/`.** Everything else
> (`skills/`, `agents/`, `hooks/`) sits at the plugin *root*. This trips everyone
> up once.

### The manifest: `.claude-plugin/plugin.json`

```json
{
  "name": "cascadia-toolkit",
  "description": "Scaffolding helpers from the CascadiaJS workshop",
  "version": "1.0.0",
  "author": { "name": "Your Name" }
}
```

`name` is also the **namespace** for your skills (`/cascadia-toolkit:new-route`).
Bump `version` to ship updates.

## Test it locally (no install needed)

The `--plugin-dir` flag loads a plugin straight from a folder, perfect for dev:

```bash
claude --plugin-dir ./cascadia-toolkit
# then inside Claude Code:
/cascadia-toolkit:new-route orders
/reload-plugins      # pick up edits without restarting
```

## Sharing via a marketplace

A **marketplace** is just a git repo with a `marketplace.json` listing plugins.
Teammates add it once, then install:

```bash
/plugin marketplace add your-org/your-marketplace-repo
/plugin install cascadia-toolkit
```

There's also Anthropic's public **`claude-community`** marketplace:

```bash
/plugin marketplace add anthropics/claude-plugins-community
```

(Submit your own via the in-app form; run `claude plugin validate` first.)

## Why this is the satisfying finish

Look what a plugin lets you bundle: your **skills** (lesson 04), **subagents**, your
**hooks**, and **MCP** servers, one installable package. It's every Claude Code
concept from the morning, zipped into something you can hand to a teammate with one
command. 🎁

## 🛠️ Capstone: turn your skill into a plugin

Head back to [Exercise 03](../exercises/03-skill/) and do the **"Level up"**
section: wrap your `new-route` skill in a `plugin.json`, load it with `--plugin-dir`,
and invoke it by its namespaced name. Bonus: add a "tests-before-stop" hook into the
same plugin.

➡️ Next: [06 · Test-driven development with Claude](./06-tdd-with-claude.md)
