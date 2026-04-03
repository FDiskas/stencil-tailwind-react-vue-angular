# @fdiskas/angular-library

Angular wrappers for components built in `@fdiskas/stencil-library`.

## Install

```bash
pnpm add @fdiskas/angular-library @fdiskas/stencil-library
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
