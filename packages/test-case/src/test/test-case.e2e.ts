import { newE2EPage } from '@stencil/core/testing'

describe('test-case', () => {
   it('renders', async () => {
      const page = await newE2EPage()
      await page.setContent('<test-case></test-case>')

      const element = await page.find('test-case')
      expect(element).toHaveClass('hydrated')
   })
})
