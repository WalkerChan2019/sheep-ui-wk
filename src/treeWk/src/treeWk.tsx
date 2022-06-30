import { defineComponent, toRefs } from "vue";
import { TreeWkProps, treeWkProps } from "./treeWk-type";

export default defineComponent({
  name: "STreeWk",
  props: treeWkProps,
  setup(props: TreeWkProps) {
    return () => {
      return <div class="s-treeWk"></div>;
    };
  }
});
