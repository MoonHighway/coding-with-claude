# Gift-card feature

Conventions for this exercise (Claude Code reads this every session):

- Named exports only, no default exports.
- Use `type` aliases for object shapes (not `interface`).
- Pure functions: no I/O, no mutation of inputs.
- Validate inputs and `throw new Error(...)` with a clear message on bad input.
- Round money with a small helper to 2 decimal places (round half up).
- Every acceptance criterion in SPEC.md gets at least one vitest case.
- Match the style of `exercises/01-refactor/solution`.

## Commands
- `pnpm test exercises/02-feature` runs this exercise's tests.
