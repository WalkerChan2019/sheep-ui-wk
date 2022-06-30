import * as inquirer from "inquirer";
import { red } from "kolorist";
// import createComponent from "../shared/create-component";

const prompt = inquirer.prompt;

// 创建类型
const CREATE_TYPES = ["component", "lib-entry"];
// 组件分类
const DOCS_CATEGORIES = ["通用", "导航", "反馈", "数据录入", "数据显示"];

export async function onCreate(args = { type: "" }) {
  console.log(args);
  let { type } = args;
  if (!type) {
    const result = await prompt([
      {
        // 输入后的属性名
        name: "type",
        // 交互的方式为列表
        type: "list",
        // 提示信息
        messages: "（必填）请选择创建类型：",
        // 选项列表
        choices: CREATE_TYPES,
        //默认选项
        default: 0
      }
    ]);
    type = result;
  }
  // 如果获取的类型不在我们支持范围内，那么输出错误提示并重新选择
  if (CREATE_TYPES.every(t => type !== t)) {
    console.log(
      red(
        `当前类型仅支持：${CREATE_TYPES.join(
          ", "
        )}，收到不在支持范围内的 "${type}"，请重新选择！`
      )
    );
    return onCreate();
  }

  try {
    switch (type) {
      case "component":
        // 如果是组件，我们还需要收集一些信息
        const info = await prompt([
          {
            name: "name",
            type: "input",
            message: "（必填）请输入组件 name ，将用作目录及文件名：",
            validate: (value: string) => {
              if (value.trim() === "") {
                return "组件 name 是必填项！";
              }
              return true;
            }
          },
          {
            name: "title",
            type: "input",
            message: "（必填）请输入组件中文名称，将用作文档列表显示：",
            validate: (value: string) => {
              if (value.trim() === "") {
                return "组件名称是必填项！";
              }
              return true;
            }
          },
          {
            name: "category",
            type: "list",
            message: "（必填）请选择组件分类，将用作文档列表分类：",
            choices: DOCS_CATEGORIES,
            default: 0
          }
        ]);

        createComponent(info);
        break;

      case "lib-entry":
        createLibEntry();
        break;

      default:
        break;
    }
  } catch (e) {
    console.log(red("✖") + e.toString());
    process.exit(1);
  }
}

function createComponent(info) {
  // 输出收集到的组件信息
  console.log(info);
}

function createLibEntry() {
  console.log("create lib-entry file.");
}