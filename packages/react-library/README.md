# @fdiskas/react-library

React wrappers for components built in `@fdiskas/stencil-library`.

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
pnpm add @fdiskas/react-library @fdiskas/stencil-library
```

Local monorepo option:

```bash
pnpm --filter react-demo add @fdiskas/react-library@workspace:* @fdiskas/stencil-library@workspace:*
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

## Troubleshooting

If you get `ERR_PNPM_FETCH_404` for `@fdiskas/*`:

1. Verify `.npmrc` contains `@fdiskas:registry=https://npm.pkg.github.com`.
2. Export a valid `GITHUB_TOKEN` with package read access.
3. Retry `pnpm add`.
