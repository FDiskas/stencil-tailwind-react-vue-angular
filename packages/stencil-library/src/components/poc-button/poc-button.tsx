import { Component, Prop, h } from '@stencil/core';

@Component({
  tag: 'poc-button',
  styleUrl: 'poc-button.css',
  shadow: true,
})
export class PocButton {
  /**
   * Visual style variant.
   */
  @Prop({ reflect: true }) variant: 'primary' | 'secondary' = 'primary';

  /**
   * Button size.
   */
  @Prop({ reflect: true }) size: 'sm' | 'md' | 'lg' = 'md';

  /**
   * Disables user interaction.
   */
  @Prop({ reflect: true }) disabled = false;

  /**
   * Native button type.
   */
  @Prop() type: 'button' | 'submit' | 'reset' = 'button';

  private getVariantClasses(): string {
    switch (this.variant) {
      case 'secondary':
        return 'bg-white text-slate-900 ring-1 ring-inset ring-slate-300 hover:bg-slate-50';
      case 'primary':
      default:
        return 'bg-blue-600 text-white hover:bg-red-500';
    }
  }

  private getSizeClasses(): string {
    switch (this.size) {
      case 'sm':
        return 'px-3 py-1.5 text-sm';
      case 'lg':
        return 'px-5 py-3 text-base';
      case 'md':
      default:
        return 'px-4 py-2 text-sm';
    }
  }

  render() {
    const classes = [
      'inline-flex items-center justify-center rounded-md font-medium transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-500 focus-visible:ring-offset-2',
      this.getVariantClasses(),
      this.getSizeClasses(),
      this.disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
    ].join(' ');

    return (
      <button type={this.type} class={classes} disabled={this.disabled}>
        <slot />
      </button>
    );
  }
}
