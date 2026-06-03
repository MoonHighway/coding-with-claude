# 00 · Setup & the lay of the land

> ⏱️ ~15 min · We'll do this together at the top of the day.

## What we're doing today

One big idea: **you describe intent, Claude handles the typing.**

We start where the power is: **Claude Code in your terminal.** It's an agentic
coding tool you delegate whole tasks to. Later in the day, once you've got the
hang of working with Claude, we'll show how to bring it into your editor (Cursor)
if that fits how you like to work.

> Why terminal-first? It's the fastest path to the core skill: handing off a task,
> reading what comes back, and steering. The editor is a nice-to-have on top of
> that. Learn the engine before the dashboard. 🚗

## Get set up (do this now)

First confirm Node, then run the setup script:

```bash
node --version      # v20+
./setup.sh          # installs Claude Code + wires it to today's AI Gateway key
```

`./setup.sh` installs Claude Code if you don't have it, asks for the **workshop key**
(it's on the screen — shared for the room), and verifies the connection. Paste the
key when prompted, then open a **new terminal** and you're ready:

```bash
claude --version    # confirm the CLI is there
claude              # start talking to it
```

Run `claude` from inside a project directory and you're talking to it. Because we
route through the **AI Gateway**, you don't need your own Claude login today — one
shared key covers the room, and we can swap models for everyone at once.

Missing something or the script errors? Flag me down. The first 30 minutes are setup
office hours, so don't suffer in silence.

> 🔌 Under the hood, `setup.sh` just sets three env vars in your shell profile so
> Claude Code talks to the Gateway. The full manual version (and how to remove it
> later with `./setup.sh --uninstall`) is in `.env.example`.

## The mental model for the whole day

```
        You (intent, taste, judgment)
                  │
                  ▼
   ┌──────────────────────────────┐
   │  Claude (drafts, edits, runs) │
   └──────────────────────────────┘
                  │
                  ▼
        Code you actually read
```

The human stays in charge of **taste and verification**. Claude is fast and
tireless but will confidently do the wrong thing if you let it. Your job all day:
give good context, then *read what comes back*.

## Say hi to Claude Code right now

From this repo, start it and ask:

```
claude
> What does this project do? Give me the 30-second tour.
```

It reads your files to answer. That's the whole game: the better the context, the
better the help. We'll spend the morning getting good at this in the terminal,
then bring it into the editor this afternoon.

## A note on "is this cheating?"

Nope. You're still the engineer. You choose what to build, judge whether it's
right, and own the result. We're just deleting the boring parts. 💚

➡️ Next: [01 · Claude Code fundamentals](./01-claude-code-fundamentals.md)
