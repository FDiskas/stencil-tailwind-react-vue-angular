// Add button component tests
import { h, describe, it, expect, render } from '@stencil/vitest';

describe('poc-button', () => {
  it('renders with default primary styles', async () => {
    const { root } = await render(<poc-button>Click me</poc-button>);

    await expect(root).toEqualHtml(`
      <poc-button class="hydrated">
        <mock:shadow-root>
          <button type="button" class="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 bg-sky-600 text-white hover:bg-sky-500 px-4 py-2 text-sm cursor-pointer">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </poc-button>
    `);
  });

  it('renders secondary variant and large size', async () => {
    const { root } = await render(
      <poc-button variant="secondary" size="lg">
        Secondary
      </poc-button>,
    );

    await expect(root).toEqualHtml(`
      <poc-button variant="secondary" size="lg" class="hydrated">
        <mock:shadow-root>
          <button type="button" class="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 bg-white text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50 px-5 py-3 text-base cursor-pointer">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </poc-button>
    `);
  });

  it('renders disabled state', async () => {
    const { root } = await render(<poc-button disabled>Disabled</poc-button>);

    await expect(root).toEqualHtml(`
      <poc-button disabled="" class="hydrated">
        <mock:shadow-root>
          <button type="button" disabled="" class="inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2 bg-sky-600 text-white hover:bg-sky-500 px-4 py-2 text-sm cursor-not-allowed opacity-50">
            <slot></slot>
          </button>
        </mock:shadow-root>
      </poc-button>
    `);
  });
});
