# Agent Instructions for This Repository

When a task involves this repository's architecture, package wiring, or framework wrapper integration, load and apply the local skill:

- `.agents/skills/mediq-stencil-monorepo-architecture/SKILL.md`

Prefer this skill for requests related to:

- Turborepo task setup and monorepo structure
- Stencil component package changes
- React wrapper generation and consumption
- Vite demo apps using workspace packages
- Extending wrappers to Angular and Vue

Always follow this repository workflow:

1. Make package-level changes first.
2. Preserve root `turbo run` delegation style.
3. Run `pnpm build` from the repository root before finishing.
