# Huzerovo主题

## 介绍

一个简单的Hexo主题。以黑白灰为主色调，当然，也可以更改成其他配色。

## 一些有趣的地方

- 代码高亮
- 深色模式
- 响应式设计
- 本地搜索

## 配置说明

### 页面配置选项

`index`：此字段用于配置首页标题。

`menu`：此字段用于配置顶栏中的导航选项。其中：
- `title`用于配置导航显示的名称。
- `link`用于配置导航链接。

页面配置指南：

1. 主页  
   `home`：配置首页路径。无需手动创建。

2. 归档  
   `archive`：配置网站文章归档页面路径。
   与网站配置中`archive_dir`设置的文件夹相同。
   无需手动创建。

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

### 搜索功能

`search`字段用于配置搜索功能。
- `enable`：是否启用搜索功能，启用搜索功能需要安装`hexo-generator-searchdb`。
- `link`：搜素页面路径，需要手动创建。

   ```shell
   hexo new page search
   ```

   并编辑`source/search/index.md`，保证Front-matter区域存在字段：

   ```yml
   title: search
   ```

> 搜索功能持续开发中...

1. 目前正则搜索功能不支持标志，并在搜索时使用`g`标志进行匹配。

2. 使用关键字搜索时，单词间的空格会被视为关键字的一部分。
   如`a b`则会匹配`aa bb`，而不会匹配`a`、`b`或者`ab`。

3. 如果需要查找多个关键字，在关键字前使用`+`进行标记，搜索结果为包含关键字文章的并集。
   首个关键字可以省略`+`。
   如`one +two`将会匹配包含关键字`one`或`two`的文章。

4. 若关键字间存在包含关系，如`o +on`，则优先进行长关键字的匹配。

5. 若文章同时包含多个关键字，则使用首次匹配到的关键字。

### 文章目录

`toc`：全局选项，控制是否显示目录。
需要在文章Front-matter区域添加`toc: true`以在文章内启用。

### 公式渲染

`mathjax`：全局选项，控制是否渲染Tex/Latex代码。
需要在文章Front-matter区域添加`mathjax: true`以在文章内启用。

### 代码高亮

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

`gitalk_source`用于配置Gitalk使用到的资源。
- `css`：Gitalk样式。
- `js`：Gitalk脚本。
- `md5js`：主题使用文章标题的md5值作为文章的Gitalk id。

如果在文章生成了评论后更改了标题，请在文章Front-matter区域添加`issue_id`字段，
强制使用指定的issue作为评论区。`issue_id`为Github issue编号，
如需要使用issue`Example issue #9`作为评论区，则应设定`issue_id: 9`。

`gitalk`配置请参考：[Gitalk](https://github.com/gitalk/gitalk#usage)，并修改配置文件中对应的字段。

### 电子邮件

`email`字段用于配置电子邮件。

### 订阅

`rss`字段用于配置订阅。
- `enable`表示启用主题的订阅。
- `path`设置xml文件路径。

## 资源引用

用到的其他资源有：
[jQuery](https://jquery.com/)，
[Bootstrap Icon](https://icons.getbootstrap.com/)，
[Font awesome](https://fontawesome.com/)。
参考网站提供的CDN资源链接，并修改配置文件。~~有的CDN因不可抗力无法加载~~

## 参考配置

还可以参考[我的主题介绍](https://huzerovo.github.io/2023/07/16/introduction-to-my-theme/)。

### Front-matter参考

```yml
title: 我的主题介绍
date: 2023-07-17
updated: 2023-07-19
toc: true
katex: false
gitalk: true
todo: true
todo_msg: 主题仍在开发中
#expert: 主题仍在持续开发中 =v= # 这个会覆盖文章内摘要
pin: true
gallery: gallery
photos:
- id=89645004_p0.png
categories:
  - [开发记录]
tags:
  - 主题
  - Hexo
# 这个作为外部文章引用
#link: https://huzerovo.github.io/2023/07/17/introduction-to-my-theme/
```

### 配置文件

参考`_config_example.yml`。

## 主题开发已完成

- [x] 深色主题  
- [x] 响应式设计
- [x] 搜索
- [x] 评论
- [x] 外链
- [x] 订阅

[^front-matter]: Front-matter是文件最上方以"---"分隔的区域
