# 01 · Claude Code fundamentals

> ⏱️ ~35 min

Claude Code is an agentic coding tool: you describe a task, and it explores your
code, makes a plan, edits files, runs commands, and checks its work, all from the
CLI. It's built for **delegation**. You hand off a task and review the outcome.

## The agentic loop

Under the hood, Claude Code runs a loop you'll see again on Day 3:

```
  observe  →  plan  →  act (edit / run)  →  check  →  repeat until done
```

You steer it with how you frame the task and when you interrupt. Hit `Esc` anytime
to stop and redirect. That interrupt-and-steer rhythm is the core skill.

## The moves that matter

| Want to... | Do this |
|------------|---------|
| Think before touching code | **Plan mode**: ask it to plan first, approve, *then* execute |
| Give it standing instructions | A **`CLAUDE.md`** in your repo root (lesson 03) |
| Hand off an isolated sub-task | A **subagent** (own context window, returns a summary) |
| Enforce a rule automatically | A **hook** (runs your script on events like "before stop") |
| Package a repeatable workflow | A **skill** (lesson 04) |
| Connect external tools/data | **MCP** servers |

### Plan mode: the highest-leverage habit

For anything non-trivial, ask Claude Code to **plan first**:

```
Plan how you'd add rate limiting to the API. Don't write code yet.
```

Read the plan, nudge it, *then* let it execute. Measure twice, cut once. Planning
first is the single best habit in agentic coding.

### Subagents & hooks (quick taste)

- **Subagents** keep messy work (big searches, log dumps) out of your main
  conversation. Only the summary comes back. Great for "go research X."
- **Hooks** run deterministic scripts on lifecycle events, e.g. run tests before
  Claude is allowed to stop, or block edits to generated files.

We'll lean on these more on Day 3. Today, know they exist and what they're for.

### 🆕 Dynamic Workflows (Opus 4.8) — subagents at scale

Here's where subagents are headed. **Dynamic Workflows** let Claude write its *own*
orchestration script that spins up **tens to hundreds of parallel subagents** in a
single session, then verifies their work before reporting back. It's built for
codebase-*scale* jobs — a repo-wide migration, a security audit, a giant bug hunt —
the kind of thing you'd normally plan in quarters, done in days.

You kick one off with *"Create a dynamic workflow…"* on a scoped task. A few caveats
worth knowing:

- It's in **research preview**, gated to **Max / Team / Enterprise** plans.
- It uses **substantially more tokens** than a normal session — start small.
- It doesn't run through today's shared workshop key, so this one's a **demo to
  watch**, not a hands-on. File it under "what becomes possible."

## 🛠️ Demo: scaffold a project together

We'll do this at the front:

```
claude
> Scaffold a tiny Express + TypeScript API with one /ping route,
  a vitest setup, and a CLAUDE.md. Plan first, then build it.
```

Watch it plan, ask permission, and work. Notice how *reviewing* becomes your main
job. That review instinct is what we're building all day.

➡️ Next: [02 · Prompting for code](./02-prompting-for-code.md)
