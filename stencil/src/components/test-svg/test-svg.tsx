import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'test-svg',
  styleUrl: 'test-svg.css',
  shadow: true,
})
export class TestSvg {

  @Prop() show = true;

  render() {
    const mySvg = (
      <div class="logo">
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.6875 8.75L15.4844 16.1562L19.8906 16.1562L19.8906 31.25L21.4609 31.25L21.4609 16.1562L25.8437 16.1562L20.6875 8.75Z" fill="black" />
          <rect x="0.5" y="39.5" width="39" height="39" transform="rotate(-90 0.5 39.5)" stroke="black" />
        </svg>
      </div>
    );

    return (
      <Host>
        { this.show ? mySvg : ""}
      </Host>
    );
  }

}
