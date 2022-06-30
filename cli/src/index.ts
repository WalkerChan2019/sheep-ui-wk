// console.log("hello sheep-ui cli!");

import { Command } from "commander";

import { onCreate } from "../command/create-1";

import * as inquirer from "inquirer"; // inquirer@8.2.2只有cjs格式; 9.0是ems
// console.log(inquirer);
// import inquirer from "inquirer";
// console.log(inquirer);
const prompt = inquirer.prompt;

// 创建命令对象
const cmd = new Command();
const CREATE_TYPE = ["components", "lib-entry"];

// 注册命令、参数、回调
cmd
  // 注册 create 命令
  .command("create")
  // 添加命令描述
  .description("创建一个组件模板或配置文件")
  // 添加命令参数 -t | --type <type> ，<type> 表示该参数必填，[type] 表示选填
  .option("-t --type <type>", `创建类型，可选值：component, lib-entry`)
  // 注册命令回调
  .action(onCreate);

// 执行命令行参数解析
cmd.parse();
