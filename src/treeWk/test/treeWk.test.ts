import { render } from '@testing-library/vue'
import TreeWk from '../src/treeWk'

describe('treeWk test', () => {
  test('treeWk init render', async () => {
    const { getByRole } = render(TreeWk)
    getByRole('treeWk')
  })
})
