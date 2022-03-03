####  项目使用 vue3/vite + [Vant3](https://vant-contrib.gitee.io/vant/v3/#/zh-CN/home "vant3") + scss + tailwind

#### 添加依赖yarn / npm i    启动项目yarn run dev/npm run dev

#### 项目结构
```
|-- fmqc
    |-- .gitignore
    |-- .prettierrc  //prettier代码格式化文件
    |-- index.html
    |-- jsconfig.json //vscode 别名设置
    |-- package-lock.json
    |-- package.json
    |-- postcss.config.js //vw自适应方案配置
    |-- README.md
    |-- vite.config.js //vite项目配置
    |-- yarn.lock
    |-- build //打包后的产物
    |-- public
    |-- src
        |-- App.vue
        |-- main.js
        |-- apis  //api接口管理
        |-- assets //静态文件管理
        |   |-- css
        |   |   |-- global.scss //全局scss默认样式
        |   |   |-- variables.scss //全局scss变量
        |   |-- img //图片管理
        |-- common //公用方法函数等
		|   |-- config.js //项目baseUrl设置等
        |-- components //项目公共组件
        |-- router //路由管理
        |-- store //vuex管理
        |   |-- index.js //vuex主入口文件
        |   |-- module //modules管理
        |-- utils //工具文件夹
        |   |-- request.js //axios封装管理
        |   |-- request.sever.js //get方法等封装
        |-- views
```

