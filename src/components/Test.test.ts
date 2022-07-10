import Test from './Test'

import { render } from '@testing-library/vue'

test('Test.tsx show work', () => {
  // expect(true).toBe(true);
  // 渲染组件
  const { getByText } = render(Test)
  // asert output 断言输出结果
  getByText('点击test:0')
})
