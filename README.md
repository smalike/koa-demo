# koa-demo

#API Reference

[http://www.ruanyifeng.com/blog/2016/01/babel.html](http://www.ruanyifeng.com/blog/2016/01/babel.html)

[https://github.com/alexmingoia/koa-router/tree/master/](https://github.com/alexmingoia/koa-router/tree/master/)

[https://github.com/koajs/koa/blob/v2.x/docs/api/index.md](https://github.com/koajs/koa/blob/v2.x/docs/api/index.md)

[http://babeljs.io/docs/usage/cli/](http://babeljs.io/docs/usage/cli/)


## 备注

### 配置 Windows 开发环境
https://github.com/Microsoft/nodejs-guidelines/blob/master/windows-environment.md#compiling-native-addon-modules
设置淘宝 npm 镜像库
npm config set registry=https://registry.npm.taobao.org/
采用ESLint Javascript 静态语法检查工具，npm install eslint -g 全局安装。eslint -v 检查安装是否成功。项目根目录增加 .eslintrc 配置文件。
http://eslint.org/docs/user-guide/configuring
采用 Airbnb Javascript 开发规范
https://github.com/airbnb/javascriptk

### Atom（https://atom.io/） 开发配置
1. 基本设置
File >> Settings >>
Core >>
设置 File Encoding: utf-8
Editor >>
设置 Tab length: 2
System >>
勾选 Show in file context menu
勾选 Show in folder context menu

1.  安装相关插件
linter linter-eslint：
git-plus：Git 命令支持
hyperclick：跳转变量定义位置
highlight-selected：高亮选择变量
minimap：类似 sublime text 代码缩略视图
atom-beautify：美化代码
platformio-ide-terminal: 终端
file-icons：文件图标
color-picker：选择颜色
pigments: 显示当前颜色
elastic-tabstops: 制表符对齐(TODO)
autocomplete-paths: 路径补全
docblockr: 文档注释
atom-ternjs: 代码提示
autosave: 自动保存

命令：
apm install linter linter-eslint git-plus hyperclick js-hyperclick highlight-selected minimap atom-beautify platformio-ide-terminal file-icons color-picker elastic-tabstops autocomplete-paths docblockr atom-ternjs autosave

可选：
vim-mode-plus 增加 VIM 功能
relative-numbers 相对行号

常用快捷键：
ctrl+\ 隐藏/显示目录树
ctrl+shift+M Markdown 预览
ctrl+shift+U 切换编码
ctrl+p 查找文件
ctrl+alt+[ 折叠
ctrl+alt+] 展开
ctrl+m 找到对应括号或标签
More: Settings >> keybindings
