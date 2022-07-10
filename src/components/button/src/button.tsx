import { defineComponent, toRefs } from 'vue'
import { ButtonProps, buttonProps } from './button-type'

export default defineComponent({
  name: 'SButton',
  props: buttonProps,
  setup(props: ButtonProps, { slots }) {
    const { type, size } = toRefs(props)
    return () => {
      const defaultSlot = slots.default ? slots.default() : '按钮'
      return (
        <button class={`s-btn s-btn--${type.value} s-btn--${size.value}`}>
          {defaultSlot}
        </button>
      )
    }
  }
})

// 对TSX语法，目前实现shift + alt +F 快捷键 自动格式化
// 对js和ts，保存时自动格式化，且带有语法提示
