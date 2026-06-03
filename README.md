# Coding with Claude 🌲

**CascadiaJS 2026 · Wednesday, June 3 · with Eve Porcello**

Welcome! Today we turn Claude into your daily coding partner. We start where the
power is: **Claude Code in your terminal**. By the afternoon you'll have refactored
a codebase, shipped a feature, written your own Claude Skill, packaged it as a
plugin, and built something test-first, all by delegating to Claude and reviewing
its work. Then we'll show how to bring it into your **editor** (Cursor) if you want.

No prior AI-tooling experience needed. You *should* be comfy with TypeScript,
Node, and the terminal.

---

## ⚙️ Setup (do this first, ideally before you arrive)

1. **Node 20+**: check with `node --version`.
2. **pnpm**: `npm install -g pnpm` (or just use `npm`, your call).
3. **Install deps**: from this folder, run `pnpm install`.
4. **Run setup**: `./setup.sh` — it installs Claude Code and routes it through the
   workshop **AI Gateway** key. Paste the key (we put it on screen) when prompted; the
   script verifies the connection for you. Then open a new terminal and run `claude`.
5. **Cursor** (for the optional editor section this afternoon): [download](https://cursor.com).

```bash
./setup.sh             # the easy path — installs + configures + verifies
./setup.sh --uninstall # later, to remove the Gateway config it added
```

> 💡 No personal Claude login needed today — one shared Gateway key covers the whole
> room. Want the manual steps (or to use your own key)? See [`.env.example`](./.env.example).

> 🆘 Setup gremlins happen. The first 30 minutes of the day are setup office hours.
> Come anyway and we'll sort it out together.

---

## 🗺️ The day

### Morning: Claude Code in the terminal
| # | Lesson | Hands-on |
|---|--------|----------|
| 00 | [Setup & the lay of the land](./lessons/00-setup.md) | together |
| 01 | [Claude Code fundamentals](./lessons/01-claude-code-fundamentals.md) | live demo |
| 02 | [Prompting for code](./lessons/02-prompting-for-code.md) | [Exercise 01: Refactor](./exercises/01-refactor/) |
| 03 | [Context & memory (`CLAUDE.md`, specs)](./lessons/03-context-and-memory.md) | [Exercise 02: Build a feature](./exercises/02-feature/) |

### Afternoon: skills, plugins, TDD, and your editor
| # | Lesson | Hands-on |
|---|--------|----------|
| 04 | [Writing Claude Skills](./lessons/04-skills.md) | [Exercise 03: Build a skill](./exercises/03-skill/) |
| 05 | [Packaging it up: plugins](./lessons/05-plugins.md) | [Exercise 03 (Level up)](./exercises/03-skill/) |
| 06 | [Test-driven development with Claude](./lessons/06-tdd-with-claude.md) | [Exercise 04: TDD a feature](./exercises/04-tdd/) |
| 07 | [Bringing Claude into your editor (Cursor)](./lessons/07-claude-in-your-editor.md) | optional |

---

## 🧭 How to use this repo

- Each **lesson** is a short read with live demos I'll do at the front.
- Each **exercise** has a `starter/` (where you work) and a `solution/` (one way to do it, peek if you're stuck, but yours might be better!).
- There are no wrong answers in AI pairing, only iterations. Experiment loudly.

Let's go. ✨
