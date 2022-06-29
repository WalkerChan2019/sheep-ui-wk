// import Theme from "vitepress/dist/client/theme-default";
import Theme from "vitepress/theme";
console.log(Theme);
import Button from "../../../src/Button";
import Test from "../../../src/components/Test"
import HelloWorld from "../../../src/components/HelloWorld.vue";



import "vitepress-theme-demoblock/theme/styles/index.css";
import DemoBlock from "vitepress-theme-demoblock/components/DemoBlock.vue";
import Demo from "vitepress-theme-demoblock/components/Demo.vue";

export default {
  ...Theme,
  enhanceApp({ app }) {
    app.component("HelloWorld", HelloWorld);
    app.component("test", Test);
    app.component("s-button", Button);
    app.component("DemoBlock", DemoBlock);
    app.component("Demo", Demo);
  }
};
