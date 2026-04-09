/* eslint-disable */
/* tslint:disable */
/* auto-generated vue proxies */
import { defineContainer, type StencilVueComponent } from '@stencil/vue-output-target/runtime';

import type { JSX } from '@fdiskas/stencil-library';

import { defineCustomElement as defineMyComponent } from '@fdiskas/stencil-library/components/my-component.js';
import { defineCustomElement as definePocButton } from '@fdiskas/stencil-library/components/poc-button.js';



export const MyComponent: StencilVueComponent<JSX.MyComponent> = /*@__PURE__*/ defineContainer<JSX.MyComponent>('my-component', defineMyComponent, [
  'first',
  'middle',
  'last'
]);


export const PocButton: StencilVueComponent<JSX.PocButton> = /*@__PURE__*/ defineContainer<JSX.PocButton>('poc-button', definePocButton, [
  'variant',
  'size',
  'disabled',
  'type'
]);


