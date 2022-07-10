const path = require('path')
const fsExtra = require('fs-extra')
//
const { defineConfig, build } = require('vite')
const vue = require('@vitejs/plugin-vue')
const vueJsx = require('@vitejs/plugin-vue-jsx')

// 入口文件
const entryFile = path.resolve(__dirname, './entry.ts')
// 输出目录
const outputDir = path.resolve(__dirname, '../build')

const baseConfig = defineConfig({
  configFile: false,
  publicDir: false,
  plugins: [vue(), vueJsx()]
})

const rollupOptions = {
  external: ['vue', 'vue-router'],
  output: {
    globals: {
      vue: 'Vue'
    }
  }
}

// 创建时传入包名name
const createPackageJson = name => {
  // 根据传入name决定包名、主文件和主模块名称
  const fileStr = `{
    "name": "${name ? name : 'sheep-ui'}",
    "version": "0.0.0",
    "main": "${name ? 'index.umd.js' : 'sheep-ui.umd.js'}",
    "module": "${name ? 'index.es.js' : 'sheep-ui.es.js'}",
    "author": "杨村长",
    "github": "",
    "description": "羊村第一个组件库Sheep-UI，以后村里羊圈能不能建好就看它了！",
    "repository": {
      "type": "git",
      "url": "git+https://github.com/57code/sheep-ui.git"
    },
    "keywords": ["vue3", "组件库", "tsx", "UI"],
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/57code/sheep-ui/issues"
    }
  }`
  // 存在包名称，给单组件生成package.json文件
  if (name) {
    fsExtra.outputFile(
      path.resolve(outputDir, `${name}/package.json`),
      fileStr,
      'utf-8'
    )
  } else {
    fsExtra.outputFile(
      path.resolve(outputDir, 'package.json'),
      fileStr,
      'utf-8'
    )
  }
}

//全量构建
const buildAll = async () => {
  await build(
    defineConfig({
      ...baseConfig,
      build: {
        rollupOptions,
        lib: {
          entry: entryFile,
          name: 'sheep-ui',
          fileName: 'sheep-ui',
          formats: ['es', 'umd']
        },
        outDir: outputDir
      }
    })
  )
  createPackageJson()
}

const buildLib = async () => {
  await buildAll()
}

buildLib()
