/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
export namespace Components {
    interface TestSvg {
        "show": boolean;
    }
}
declare global {
    interface HTMLTestSvgElement extends Components.TestSvg, HTMLStencilElement {
    }
    var HTMLTestSvgElement: {
        prototype: HTMLTestSvgElement;
        new (): HTMLTestSvgElement;
    };
    interface HTMLElementTagNameMap {
        "test-svg": HTMLTestSvgElement;
    }
}
declare namespace LocalJSX {
    interface TestSvg {
        "show"?: boolean;
    }
    interface IntrinsicElements {
        "test-svg": TestSvg;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "test-svg": LocalJSX.TestSvg & JSXBase.HTMLAttributes<HTMLTestSvgElement>;
        }
    }
}
