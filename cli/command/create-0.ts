import * as inquirer from 'inquirer'
// import { red } from "kolorist";
// import createComponent from "../shared/create-component";

const prompt = inquirer.prompt

// 创建类型
const CREATE_TYPES = ['component', 'lib-entry']
// 组件分类
// const DOCS_CATEGORIES = ["通用", "导航", "反馈", "数据录入", "数据显示"];

export async function onCreate(args) {
  console.log(args)
  let { type } = args
  if (!type) {
    const result = await prompt([
      {
        // 输入后的属性名
        name: 'type',
        // 交互的方式为列表
        type: 'list',
        // 提示信息
        messages: '（必填）请选择创建类型：',
        // 选项列表
        choices: CREATE_TYPES,
        //默认选项
        default: 0
      }
    ])
    type = result
  }
}
