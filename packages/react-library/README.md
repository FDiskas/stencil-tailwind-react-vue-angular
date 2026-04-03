# @fdiskas/react-library

React wrappers for components built in `@fdiskas/stencil-library`.

## Install

```bash
pnpm add @fdiskas/react-library @fdiskas/stencil-library
```

Peer dependencies:

- `react >= 18`
- `react-dom >= 18`

## Usage

Import wrappers from `@fdiskas/react-library` and use them like regular React components.

```tsx
import { MyComponent } from "@fdiskas/react-library";

export function App() {
  return (
    <main>
      <h1>React Demo with Stencil Wrapper</h1>
      <MyComponent first="fdiskas" middle="UI" last="Team" />
    </main>
  );
}
```

This example mirrors `apps/react-demo/src/App.tsx`.

## Available Components

- `MyComponent`

## Local Monorepo Development

From repository root:

```bash
pnpm --filter @fdiskas/stencil-library build
pnpm --filter @fdiskas/react-library build
pnpm --filter react-demo dev
```
