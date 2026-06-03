---
name: new-route
description: Scaffold a new API route with a handler, types, and a test. Use when asked to create, add, or scaffold a new route or endpoint.
---

# New Route

When asked to create a new route named `<name>`:

1. Create `src/routes/<name>.ts` exporting an async handler:
   - Named export `export async function <name>Handler(req, res)`.
   - Returns JSON. No business logic inline, call a service function.
2. Create `src/routes/<name>.types.ts` with the request/response `type` aliases.
3. Create `src/routes/<name>.test.ts` with a vitest test that calls the handler
   with a fake request and asserts the response shape.
4. Register the route wherever routes are wired up (look for an existing router
   file; if none exists, note that for the user instead of inventing one).

## Conventions
- Named exports only.
- `type` aliases, not interfaces.
- Keep handlers thin; no direct DB calls in the handler.
- Every new route gets at least one test.

## After scaffolding
Print a short summary of the files you created and how to run the test.
