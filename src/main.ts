import { createApp } from "vue";
import App from "./App.vue";

import Button from "./button";

import "./index.scss";

// 使用全量导出
import sheepUI from "../build/";

createApp(App).use(sheepUI).mount("#app"); //.use(Button)
