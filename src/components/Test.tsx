import { defineComponent, withModifiers, ref } from "vue";

//1-函数式组件
// export default () => <div>tree walker</div>;

// 2-defineComponent
// 摒弃this  对ts支持最好
// github.com/vuejs/babel-plugin-jsx  文档
// vue中独特的概念：修饰符,slot ,directive, 事件派发(emit)
export default defineComponent({
  // directives
  directives: {
    focus: {
      mounted(el) {
        el.focus();
      }
    }
  },
  setup(props, { slots }) {
    //emit  ----> 此处npm run lint会报错：emit
    const count = ref(0);
    const inc = () => {
      count.value++;
      // emit("click");
    };

    return () => {
      // jsx语法里没有v-if  v-show这类的用法 需要写三元运算符
      const span = true ? <span>a</span> : <span>b</span>;
      // 列表
      const list = ref<string[]>(["a1", "b1", "c1"]);

      {
        /* 修饰符 */
      }
      return (
        <div onClick={withModifiers(inc, ["self"])}>
          点击test:{count.value}
          <br />
          {/* 传值 参数 修饰符 */}
          {/* <input
            type="text"
            v-focus={["val", "arg", ["modifier"]]}
            v-model:foo={count.value}
          /> */}
          {/* <input type="text" v-focus v-model={count.value} /> */}
          <div>{span}</div>
          <ul>
            {list.value.map(str => (
              <li key={str}>{str}</li>
            ))}
          </ul>
          {/* 默认插槽内容 */}
          <div>{slots.default && slots.default()}</div>
          {/* 具名插槽 */}
          <div>{slots.title ? slots.title() : "slots default"}</div>
        </div>
      );
    };
  }
});

// export default defineComponent({
//   render() {
//     return <div>tree 黑胡椒按揭房间啊</div>;
//   }
// });
