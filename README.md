## 介绍
一个简单的 Hexo 主题  
以黑白灰为主色调  
当然，也可以更改成其他配色

## 一些有趣的地方
- 代码高亮
- 深色模式
- 响应式设计
- 可自定义主题配色

## 配置说明

### 页面配置

1. 主页  
   `home`： 配置主页路径

2. 归档  
   `archive`： 配置网站文章归档文件夹路径  
   与网站配置中 `archive_dir` 设置的文件夹相同

3. 文章分类  
   `category`： 配置文章分类文件夹  
   与网站配置中 `category_dir` 设置的文件夹相同  
   需要手动启用，启用方法:  
   ```shell
   $ hexo new page categories
   ```

4. 标签  
   `tag`： 配置标签文件夹路径，
   与网站配置中 `tags` 设置的文件夹相同  
   需要手动启用，启用方法:  
   ```shell
   $ hexo new page tags
   ```

5. 关于  
   `about`： 一些想写的介绍  
   需要手动启用，启用方法:  
   ```shell
   $ hexo new page about
   ```

### 亮色/深色模式配置

`style.light` 项设置亮色模式样式，
`style.dark` 项设置暗色模式样式  
其中：
- `site` 设置整个网站的样式  
值可以为 CSS文件 的相对路径，也可以为外部链接  
如文件位于 `source/css/light.css`，则应设置为
   ```yml
   style:
     light:
       site: "css/light.css"`
   ```
- `code` 设置文章内的代码块的样式  
主题使用 [highlight.js](https://highlightjs.org) 进行渲染，
建议在 [highlightjs style](https://github.com/highlightjs/highlight.js/tree/main/src/styles) 中选取 CSS 文件  
值可以为相对路径，也可以为外部链接，如
   ```yml
   style:
     light:
       code: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github.min.css"
   ```

### 功能配置

#### 文章目录
`toc`： 全局选项，控制是否显示目录  
需要在文章 Front-matter[^front-matter] 区域添加 `toc: true` 以在文章内启用  

#### 公式渲染
`mathjax：` 全局选项，控制是否渲染 Tex/Latex 代码  
需要在文章 Front-matter 区域添加 `mathjax: true` 以在文章内启用  

[^front-matter]: Front-matter 是文件最上方以 --- 分隔的区域

#### 代码高亮
`highlightjs`： 是否启用代码高亮，使用 [highlight.js](https://highlightjs.org)
1. 首先禁用 Hexo 的内置渲染  
编辑 Hexo 的配置文件，修改为如下配置
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
   highlightjs: true
   ```

代码高亮样式见上方 **亮色/深色模式配置**

## 参考配置
```yml
menu:
  home: /
  archive: /archives
  category: /categories
  tag: /tags
  about: /about

toc: true
mathjax: true
highlightjs: true

style:
  light:
    site: "css/light.css"
    code: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github.min.css"
  dark:
    site: "css/dark.css"
    code: "https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.2.0/styles/github-dark.min.css"
```

## TODO
### 已完成
- [x] 深色主题  
- [x] 更多主题（可自己编写相应的 CSS文件）

### 等待完成
- [ ] 搜索

### 在考虑要不要
- [ ] 评论
- [ ] 音乐播放器
- [ ] 订阅
