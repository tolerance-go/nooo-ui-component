import { Component, h, Host, Prop } from '@stencil/core'

@Component({
   tag: 'test-case',
   styleUrl: 'test-case.css',
   shadow: true,
})
export class TestCase {
   /** (optional) Alert size */
   @Prop() size?: string = ''

   render() {
      return (
         <Host>
            {this.size}: <slot></slot>
         </Host>
      )
   }
}
