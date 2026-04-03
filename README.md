# mq-components

Monorepo for building reusable Stencil web components once and consuming them in React, Angular, and Vue applications through framework-specific wrapper libraries.

## Tech Stack

- pnpm workspaces
- Turborepo task orchestration
- Stencil component library (source of truth)
- React wrapper library + Vite React demo
- Angular wrapper library + Angular demo
- Vue wrapper library + Vite Vue demo

## Repository Layout

```text
.
├─ apps/
│  ├─ react-demo
│  ├─ angular-demo
│  └─ vue-demo
├─ packages/
│  ├─ stencil-library
│  ├─ react-library
│  ├─ angular-library
│  └─ vue-library
├─ turbo.json
├─ pnpm-workspace.yaml
└─ tsconfig.base.json
```

## Package Responsibilities

### Core source package

- `@mq/stencil-library` (`packages/stencil-library`)
- Owns component implementation (currently `my-component`)
- Generates distribution artifacts and framework proxies

### Wrapper packages

- `@mq/react-library` (`packages/react-library`)
  - Re-exports generated React wrappers from Stencil output
- `@mq/angular-library` (`packages/angular-library`)
  - Exposes generated Angular standalone wrappers
- `@mq/vue-library` (`packages/vue-library`)
  - Re-exports generated Vue wrappers

### Demo applications

- `apps/react-demo` consumes `@mq/react-library`
- `apps/angular-demo` consumes `@mq/angular-library` (and `@mq/stencil-library`)
- `apps/vue-demo` consumes `@mq/vue-library`

## Build Graph and Task Wiring

Root scripts delegate to Turborepo only:

- `pnpm build` -> `turbo run build`
- `pnpm dev` -> `turbo run dev`
- `pnpm lint` -> `turbo run lint`
- `pnpm test` -> `turbo run test`

Turbo task behavior (from `turbo.json`):

- `build` depends on upstream package builds and caches outputs (`dist/**`, `www/**`, `loader/**`, `lib/**`)
- `dev` is persistent and non-cached
- `test` depends on `build`

## Wrapper Generation Flow

Stencil is configured to generate framework integration outputs in `packages/stencil-library/stencil.config.ts`:

- React proxies -> `packages/react-library/src/components/stencil-generated`
- Angular proxies -> `packages/angular-library/src/lib/stencil-generated/components.ts`
- Vue proxies -> `packages/vue-library/src/components.ts`
- `dist-custom-elements` is enabled with `externalRuntime: false`

This means package-level changes should start in the Stencil source package and then be validated through wrappers and demo apps.

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 10+

### Install dependencies

```bash
pnpm install
```

## Common Commands

Run from repository root.

### Full monorepo

```bash
pnpm build
pnpm dev
pnpm lint
pnpm test
```

### Focused development (Turbo filters)

```bash
# React demo only
pnpm --filter react-demo dev

# Angular demo only
pnpm --filter angular-demo dev

# Vue demo only
pnpm --filter vue-demo dev

# Stencil package watch/dev server
pnpm --filter @mq/stencil-library start
```

### Build specific packages/apps

```bash
pnpm --filter @mq/stencil-library build
pnpm --filter @mq/react-library build
pnpm --filter @mq/angular-library build
pnpm --filter @mq/vue-library build
pnpm --filter react-demo build
pnpm --filter angular-demo build
pnpm --filter vue-demo build
```

## Recommended Change Workflow

1. Update component source in `packages/stencil-library/src/components`.
2. Build Stencil package to regenerate framework proxies and artifacts.
3. Build affected wrapper package(s).
4. Verify behavior in corresponding demo app(s).
5. Run `pnpm build` from repo root to validate end-to-end graph integrity.

## Notes

- Workspace packages are linked using `workspace:*`.
- TypeScript version is managed via pnpm catalog in `pnpm-workspace.yaml`.
- `stencil-tailwind-plugin@2.0.5` is patched via `patches/stencil-tailwind-plugin@2.0.5.patch`.
