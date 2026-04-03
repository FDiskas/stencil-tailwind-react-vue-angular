import { Component, Prop, h } from '@stencil/core';
import { format } from '../../utils/utils';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true,
})
export class MyComponent {
  /**
   * The first name
   */
  @Prop() first?: string;

  /**
   * The middle name
   */
  @Prop() middle?: string;

  /**
   * The last name
   */
  @Prop() last?: string;

  private getText(): string {
    return format(this.first, this.middle, this.last);
  }

  render() {
    return (
      <div class="rounded-xl border border-mq-surface-strong bg-mq-surface p-4 font-sans text-mq-text shadow-sm">
        <p class="text-xs font-semibold uppercase tracking-[0.16em] text-mq-primary">
          Mediq UI
        </p>
        <p class="mt-2 text-base leading-6">Hello, World! I&apos;m {this.getText()}</p>
      </div>
    );
  }
}
