import { render } from '@testing-library/vue'
import Button from '../src/button'

// 基础按钮
test('should works', () => {
  const { getByRole } = render(Button)
  getByRole('button')
})

// 插槽
test("default slot should be '按钮'", () => {
  // 渲染组件
  const { getByText } = render(Button)
  // asert output 断言输出结果
  getByText('按钮')
})

test('slot should work', () => {
  const { getByText } = render(Button, {
    slots: {
      default() {
        return 'button'
      }
    }
  })
  getByText('button')
})

// 按钮类型
test('default type should be secondary', () => {
  // 默认secondary
  const { getByRole } = render(Button)
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--secondary')).toBe(true)
})
test('type should work', () => {
  const { getByRole } = render(Button, {
    props: {
      type: 'primary'
    }
  })
  const button = getByRole('button')
  expect(button.classList.contains('s-btn--primary')).toBe(true)
})
