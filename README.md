# 没有名字的主题

## 介绍

一个简单的Hexo主题。以黑白灰为主色调，当然，也可以更改成其他配色。

## 一些有趣的地方

- 代码高亮
- 深色模式
- 响应式设计
- 可自定义主题配色

## 配置说明

### 页面配置

1. 主页  
   `home`：配置主页路径。

2. 归档  
   `archive`：配置网站文章归档页面路径。
   与网站配置中`archive_dir`设置的文件夹相同。

3. 文章分类  
   `category`：配置文章分类页面。
   需要手动启用，启用方法：

   ```shell
   hexo new page categories
   ```

   并编辑`source/categories/index.md`，保证Front-matter[^front-matter]区域存在字段：

   ```yml
   title: categories
   ```

4. 标签云
   `tagcloud`：配置标签云页面路径。
   需要手动启用，启用方法：

   ```shell
   hexo new page tagcloud
   ```

   并编辑`source/tagcloud/index.md`，保证Front-matter区域存在字段：

   ```yml
   title: tagcloud
   ```

5. 关于  
   `about`：一些想写的介绍。
   需要手动启用，启用方法：

   ```shell
   hexo new page about
   ```

   并编辑`source/about/index.md`，保证Front-matter区域存在字段：

   ```yml
   title: about
   ```

### 亮色/深色模式配置

`style`字段设置网站主题，以及代码高亮主题。

- `site`设置整个网站的样式，值为CSS文件的相对路径，
  如文件位于`source/css/light.css`，则应设置为

  ```yml
  style:
    site:
      light: "css/light.css"
      dark: "css/dark.css"
  ```

- `code` 设置文章内的代码块的样式  
  主题使用[highlight.js](https://highlightjs.org)进行渲染，
  建议在[highlightjs style](https://github.com/highlightjs/highlight.js/tree/main/src/styles)
  中选取CSS文件。值可以为相对路径，也可以为外部链接，如

  ```yml
  style:
    code:
      light: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github.min.css"
      dark: "css/github-dark.min.css"
  ```

### 功能配置

#### 文章目录

`toc`：全局选项，控制是否显示目录。
需要在文章Front-matter区域添加`toc: true`以在文章内启用。

#### 公式渲染

`mathjax`：全局选项，控制是否渲染Tex/Latex代码。
需要在文章Front-matter区域添加`mathjax: true`以在文章内启用。

#### 代码高亮

`highlightjs`：是否启用代码高亮，使用[highlight.js](https://highlightjs.org)

1. 首先禁用 Hexo 的内置渲染

   编辑 Hexo 的配置文件，修改为如下配置：

   ```yml
   ...
   highlight:
      enable: false
   ...
   prismjs:
      enable: false
   ...
   ```

2. 在主题配置文件中启用代码高亮

   ```yml
   hljs:
     enable: true
     # CDN链接
     js: 'https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.7.0/highlight.min.js'
   ```

   代码高亮样式见上方**亮色/深色模式配置**

### Gitalk配置

在配置中的`css`，`js`以及`md5js`是Gitalk需要用到的外部资源，支持本地引用或者CDN链接。
其余配置请参考：[Gitalk](https://github.com/gitalk/gitalk#usage)，并修改配置文件中对应的字段。

### 其他资源引用

用到的其他资源有：[jQuery](https://jquery.com/)，[Bootstrap Icon](https://icons.getbootstrap.com/)。
参考网站提供的CDN资源链接，并修改配置文件。~~有的CDN因不可抗力无法加载~~

## 参考配置

见配置文件。

## TODO

### 已完成

- [x] 深色主题  
- [x] 更多主题（可自己编写相应的 CSS文件）
- [x] 搜索
- [x] 评论

### 在考虑要不要

- [ ] 音乐播放器
- [ ] 订阅

[^front-matter]: Front-matter是文件最上方以"---"分隔的区域
