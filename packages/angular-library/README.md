# @fdiskas/angular-library

Angular wrappers for components built in `@fdiskas/stencil-library`.

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
pnpm add @fdiskas/angular-library @fdiskas/stencil-library
```

Local monorepo option:

```bash
pnpm --filter angular-demo add @fdiskas/angular-library@workspace:* @fdiskas/stencil-library@workspace:*
```

Peer dependencies:

- `@angular/core >= 20`
- `@angular/common >= 20`
- `@angular/forms >= 20`
- `rxjs ^7.8.0`

## 1) Register Custom Elements (once at app bootstrap)

```ts
import { bootstrapApplication } from "@angular/platform-browser";
import { defineCustomElements } from "@fdiskas/stencil-library/loader";

import { appConfig } from "./app/app.config";
import { App } from "./app/app";

defineCustomElements();
bootstrapApplication(App, appConfig).catch((err) => console.error(err));
```

This mirrors `apps/angular-demo/src/main.ts`.

## 2) Import and use wrapper components

```ts
import { Component } from "@angular/core";
import { MyComponent } from "@fdiskas/angular-library";

@Component({
  selector: "app-root",
  imports: [MyComponent],
  template: `
    <main>
      <h1>Angular Demo</h1>
      <my-component first="fdiskas" middle="Angular" last="Demo"></my-component>
    </main>
  `,
})
export class App {}
```

This mirrors `apps/angular-demo/src/app/app.ts` and `apps/angular-demo/src/app/app.html`.

## Available Components

- `MyComponent`

## Local Monorepo Development

From repository root:

```bash
pnpm --filter @fdiskas/stencil-library build
pnpm --filter @fdiskas/angular-library build
pnpm --filter angular-demo dev
```

## Troubleshooting

If you get `ERR_PNPM_FETCH_404` for `@fdiskas/*`:

1. Verify `.npmrc` contains `@fdiskas:registry=https://npm.pkg.github.com`.
2. Export a valid `GITHUB_TOKEN` with package read access.
3. Retry `pnpm add`.
