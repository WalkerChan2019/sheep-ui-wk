import { defineComponent } from "vue";

//1-函数式组件
// export default () => <div>tree walker</div>;

// 2-defineComponent
// export default defineComponent({
//   setup(props, ctx) {
//     return () => <div>tree</div>;
//   },
// });

export default defineComponent({
  render() {
    return <div>tree 黑胡椒按揭房间啊</div>;
  }
});
