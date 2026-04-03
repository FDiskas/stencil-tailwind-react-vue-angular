# @fdiskas/vue-library

Vue wrappers for components built in `@fdiskas/stencil-library`.

## Install

```bash
pnpm add @fdiskas/vue-library @fdiskas/stencil-library
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
