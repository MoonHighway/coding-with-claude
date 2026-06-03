# Example plugin: `cascadia-toolkit` 🎁

This is the lesson-04 `new-route` skill, **packaged as a Claude Code plugin**: the
Level-up from Exercise 03 and the capstone for [lesson 05](../../../lessons/05-plugins.md).

```
cascadia-toolkit/
├── .claude-plugin/
│   └── plugin.json          # the manifest (ONLY this file lives here)
└── skills/
    └── new-route/
        └── SKILL.md          # the same skill, now namespaced & shareable
```

## Try it

```bash
# From exercises/03-skill/example-plugin
claude --plugin-dir ./cascadia-toolkit

# Inside Claude Code, the skill is now namespaced under the plugin:
/cascadia-toolkit:new-route orders
/reload-plugins        # picks up edits without restarting
```

## Make it yours

- Bump `version` in `plugin.json` to ship an update.
- Add a second skill folder under `skills/`.
- Drop in a `hooks/hooks.json` (e.g. a "tests before stop" hook from lesson 01)
  to bundle automation with your skill.
- Add an `agents/` folder to ship a subagent.

## Sharing it for real

Put this plugin in a git repo with a `marketplace.json`, and teammates run:

```bash
/plugin marketplace add your-org/your-repo
/plugin install cascadia-toolkit
```

That's the whole distribution story: one command for them, one repo for you.
