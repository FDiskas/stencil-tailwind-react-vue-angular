---
name: fdiskas-stencil-monorepo-architecture
description: |
  Use when working in this repository on monorepo architecture, Turborepo task wiring,
  Stencil component packages, React wrapper generation, Vite demo apps, pnpm workspaces,
  or cross-framework plans for React/Angular/Vue. Triggers on: fdiskas components, stencil monorepo,
  turborepo, react output target, wrapper library, vite demo, pnpm workspace, angular wrapper,
  vue wrapper, web components design system.
allowed-tools:
  - Read
  - Write
  - Edit
  - Bash
  - Grep
  - Glob
---

# fdiskas Stencil Monorepo Architecture Skill

This skill is the source of truth for how this repository is structured and how to safely extend it.

## Repository Intent

Build reusable Stencil web components once and consume them from multiple framework wrappers.
Current implementation is React-first, with Angular and Vue planned next.

## Current Monorepo Layout

- Root package manager: `pnpm`
- Build orchestrator: `turborepo`
- Workspaces: `apps/*` and `packages/*`

Top-level important files:

- `package.json` (root scripts delegate to turbo)
- `pnpm-workspace.yaml`
- `turbo.json`
- `tsconfig.base.json`

Packages/apps in this repo:

- `packages/stencil-library` -> `@fdiskas/stencil-library`
- `packages/react-library` -> `@fdiskas/react-library`
- `apps/react-demo` -> Vite React consumer app

## Non-Negotiable Conventions

1. Package scripts own implementation; root scripts only call `turbo run <task>`.
2. Keep package boundaries clear (`apps/*` consume `packages/*`; avoid ad-hoc cross-imports).
3. Use official CLIs for scaffolding when creating new packages/apps.
4. Keep `moduleResolution: "bundler"` where wrapper/runtime dependencies require it.
5. Validate changes with a full monorepo build after integration changes.

## Critical Stencil + React Wrapper Nuances

When using `@stencil/react-output-target`, these are mandatory:

1. In `packages/stencil-library/stencil.config.ts`, include `dist-custom-elements` with:
   - `externalRuntime: false`
2. Keep `reactOutputTarget({...})` configured with:
   - `outDir: '../react-library/src/components/stencil-generated'`
   - `stencilPackageName: '@fdiskas/stencil-library'`
3. Ensure Stencil package exports include deep paths used by generated wrappers:
   - `"./dist/*"`
   - `"./components/*"` (recommended)

If missing, TypeScript in `@fdiskas/react-library` may fail to resolve generated imports like:
`@fdiskas/stencil-library/dist/components/<component>.js`.

## React Wrapper Package Rules

In `packages/react-library`:

1. `src/index.ts` should re-export generated wrappers from:
   - `./components/stencil-generated/components`
2. `tsconfig.json` should include:
   - `rootDir: "./src"`
   - `outDir: "./dist"`
   - `moduleResolution: "bundler"`
3. Keep dependency on:
   - `@stencil/react-output-target`
   - `@fdiskas/stencil-library` via `workspace:*`

## Consumer App Rules (React Demo)

In `apps/react-demo`:

1. Depend on `@fdiskas/react-library` via `workspace:*`.
2. Import wrappers directly, e.g. `import { MyComponent } from '@fdiskas/react-library'`.
3. Keep demo intentionally simple and focused on integration proof.

## Default Commands

Run from repository root:

- Install: `pnpm install`
- Build all packages/apps: `pnpm build`
- Dev all (Turbo): `pnpm dev`
- Dev only demo app: `pnpm --filter react-demo dev`

## Official Scaffolding Commands

Use these patterns for new work:

1. Stencil package creation (from `packages/`):
   - `pnpm create stencil@latest components <package-name>`
2. React demo app creation:
   - `pnpm create vite@latest apps/<app-name> --template react-ts`

## Change Workflow (Required)

1. Update Stencil component source in `packages/stencil-library/src/components`.
2. Build Stencil package so wrappers regenerate.
3. Build wrapper package.
4. Build/verify consumer app.
5. Run full `pnpm build` to confirm end-to-end graph validity.

## Extension Plan: Angular and Vue

When adding Angular/Vue wrappers:

1. Add new wrapper package under `packages/` per framework.
2. Configure corresponding Stencil output targets in `stencil.config.ts`.
3. Create one simple framework demo app under `apps/` using official CLI.
4. Preserve the same contract used here: generated wrappers package + minimal consumer demo.

## Auto-Trigger Hints For Future Sessions

This skill should be selected whenever requests mention one or more of:

- fdiskas components monorepo
- turborepo setup or task wiring
- stencil reusable components
- react/angular/vue wrappers
- react output target
- vite demo app integration
- pnpm workspaces
- design system package architecture

When triggered, use this skill as the first architectural reference before making edits.
