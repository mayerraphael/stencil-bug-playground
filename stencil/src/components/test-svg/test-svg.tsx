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
        <svg xmlns="http://www.w3.org/2000/svg">
          <path
            d="M238.9,95.2h31.4V124h-89.9V0h89v28.8h-30.6v19.8h27.9v26.1h-27.9V95.2z"
            fill="#FFFFFF"
          />
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
