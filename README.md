# lego-materials

> Lego is a set of materials built on Vue.js.

## 目录结构

```bash
.
├── README.md                              # README文件
├── build                                  # webpack和本地server服务配置文件目录
│   ├── build-style.js                     # 打包物料库样式文件
│   ├── build.js                           # 打包展示页面文件
│   ├── check-versions.js                  # 打包编译环境版本检查
│   ├── utils.js                           # 配置文件工具函数
│   ├── vue-loader.conf.js                 # vue单文件编译配置文件
│   ├── webpack.base.conf.js               # webpack基础配置文件
│   ├── webpack.dev.conf.js                # webpack开发环境配置文件
│   ├── webpack.dist.dev.conf.js           # 打包物料库开发环境js
│   ├── webpack.dist.prod.conf.js          # 打包物料库生产环境js
│   ├── webpack.prod.conf.js               # webpack生产环境配置文件
│   └── webpack.test.conf.js               # webpack测试环境配置文件
├── config                                 # 提供给webpack各个环境的配置变量文件目录
│   ├── dev.env.js                         # dev开发环境的环境变量
│   ├── index.js                           # webpack各环境的配置变量
│   ├── prod.env.js                        # prod生产环境的环境变量
│   └── test.env.js                        # test生产环境的环境变量
├── dist                                   # 物料库输出文件夹
│   ├── lego.js
│   ├── lego.js.map
│   ├── lego.min.js
│   ├── lego.min.js.gz
│   ├── lego.min.js.map
│   └── styles
│       ├── card.css
│       ├── divider.css
│       ├── floor.css
│       └── index.css
├── examples                               # 开发环境组件展示目录
│   ├── App.vue                            # vue主入口模版
│   ├── assets                             # 存放静态资源
│   │   └── logo.png
│   ├── main.js                            # js主入口文件
│   └── routers                            # 组件展示页面模块
│       ├── card.vue
│       ├── divider.vue
│       └── floor.vue
├── index.html
├── package-lock.json
├── package.json
├── src                                    # 组件开发目录
│   ├── card                               # 单个组件目录，目录名称和组件名称保持一致
│   │   ├── card.vue                       # 组件开发vue单文件
│   │   ├── index.js                       # 单个组件入口文件
│   │   └── schema.json                    # 单个组件 schema 配置文件
│   ├── divider
│   │   ├── divider.vue
│   │   ├── index.js
│   │   └── schema.json
│   ├── floor
│   │   ├── floor.vue
│   │   ├── index.js
│   │   └── schema.json
│   ├── index.js                          # 所有组件入口文件
│   ├── styles                            # 组件样式文件夹
│   │   ├── card.less
│   │   ├── common
│   │   ├── divider.less
│   │   ├── floor.less
│   │   ├── index.less
│   │   └── mixins
│   └── utils.js
├── static
└── test
    └── unit
        ├── index.js
        ├── karma.conf.js
        └── specs
```

## 项目npm命令

```bash
    "dev": "webpack-dev-server --inline --progress --config build/webpack.dev.conf.js",
    "start": "webpack-dev-server --inline --progress --open --config build/webpack.dev.conf.js",
    "unit": "cross-env BABEL_ENV=test karma start test/unit/karma.conf.js --single-run",
    "test": "npm run unit",
    "lint": "eslint --fix --ext .js,.vue src examples test/unit",
    "dist:dev": "webpack --config build/webpack.dist.dev.conf.js",
    "dist:prod": "webpack --config build/webpack.dist.prod.conf.js",
    "dist:style": "gulp --gulpfile build/build-style.js",
    "dist": "npm run dist:style && npm run dist:dev && npm run dist:prod "
```

- `npm run dev` 项目开发启动命令
- `npm run start` 项目开发并打开浏览器
- `npm run unit` 项目单元测试命令
- `npm run lint` eslint检测并自动修复
- `npm run dist` 项目生产环境编译命令，输出组件
- `npm publish` 发布前端组件

## 开发步骤

  1. 安装依赖 `npm install`
  2. 编写组件
     - 在`/src`目录下新建一个组件文件夹，文件夹名称和组件名一致
     - 主逻辑在`${name}.vue`文件夹中编写，`index.js`为组件入口，`schema.json`为组件配置文件，提供逐渐默认值展示
  3. 预览组件效果
     - 在`/examples/routes`目录编写`${name}.vue`展示组件
  4. 开发完成
     - `npm run dist` 打包组件
     - 修改`package.json`中的版本号，`npm run publist` 发布组件

## 涉及技术栈

- [x] [Vue](https://cn.vuejs.org/)
- [x] [Vue-router](https://router.vuejs.org/)
- [x] [Webpack](https://webpack.github.io)
- [x] [Babel](https://babeljs.io/)
- [x] [Autoprefixer](https://github.com/postcss/autoprefixer)
- [x] [PostCSS](https://github.com/postcss/postcss)
- [x] [Less](http://lesscss.org/)
