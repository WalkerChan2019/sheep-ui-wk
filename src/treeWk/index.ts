import { App } from "vue";
import TreeWk from "./src/treeWk";
import { installComponent } from "../install";
import type { SheepUIOptions } from "../_utils/global-config";

// 具名导出
export { TreeWk };

// 导出插件
export default {
  install(app: App, options?: SheepUIOptions) {
    installComponent(app, TreeWk, options);
  }
};
