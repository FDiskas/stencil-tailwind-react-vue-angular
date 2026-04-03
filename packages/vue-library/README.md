# @fdiskas/vue-library

Vue wrappers for components built in `@fdiskas/stencil-library`.

## Install

This scope is published to GitHub Packages, not the default npm registry.

Official docs:

- Installing a package: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#installing-a-package
- Authenticating to GitHub Packages: https://docs.github.com/en/packages/working-with-a-github-packages-registry/working-with-the-npm-registry#authenticating-to-github-packages

### Create a GITHUB_TOKEN

1. Open GitHub settings and go to Developer settings -> Personal access tokens.
2. Create a token (classic) with `read:packages` scope.
3. Export it in your shell:

```bash
export GITHUB_TOKEN=ghp_your_token_here
```

For Windows PowerShell:

```powershell
$env:GITHUB_TOKEN = "ghp_your_token_here"
```

Create or update your `.npmrc`:

```ini
@fdiskas:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
always-auth=true
```

Then install:

```bash
pnpm add @fdiskas/vue-library @fdiskas/stencil-library
```

Local monorepo option:

```bash
pnpm --filter vue-demo add @fdiskas/vue-library@workspace:* @fdiskas/stencil-library@workspace:*
```

Peer dependencies:

- `vue >= 3`

## Usage

Import wrappers from `@fdiskas/vue-library` and use them in Vue templates.

```vue
<script setup lang="ts">
import { MyComponent } from "@fdiskas/vue-library";
</script>

<template>
  <main>
    <h1>Vue Demo with Stencil Wrapper</h1>
    <MyComponent first="fdiskas" middle="UI" last="Team" />
  </main>
</template>
```

This example mirrors `apps/vue-demo/src/App.vue`.

## Available Components

- `MyComponent`

## Local Monorepo Development

From repository root:

```bash
pnpm --filter @fdiskas/stencil-library build
pnpm --filter @fdiskas/vue-library build
pnpm --filter vue-demo dev
```

## Troubleshooting

If you get `ERR_PNPM_FETCH_404` for `@fdiskas/*`:

1. Verify `.npmrc` contains `@fdiskas:registry=https://npm.pkg.github.com`.
2. Export a valid `GITHUB_TOKEN` with package read access.
3. Retry `pnpm add`.
