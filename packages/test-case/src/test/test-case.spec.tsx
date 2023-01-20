import { newSpecPage } from '@stencil/core/testing'
import { TestCase } from '../test-case'

describe('test-case', () => {
   it('renders', async () => {
      const page = await newSpecPage({
         components: [TestCase],
         html: `<test-case></test-case>`,
      })
      expect(page.root).toEqualHtml(`
      <test-case>
        <mock:shadow-root>
          :
          <slot></slot>
        </mock:shadow-root>
      </test-case>
    `)
   })
})
