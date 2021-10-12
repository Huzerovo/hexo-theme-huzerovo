一个简单的 Hexo 主题  

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
```

## 配置说明

### 页面配置

1. 主页
   `home` 配置主页路径

2. 归档
   `archive` 配置网站文章归档文件夹路径，
   一般与网站配置中 `archive_dir` 设置的文件夹相同  

3. 文章分类
   `category` 配置文章分类文件夹，
   与网站配置中 `category_dir` 设置的文件夹相同，  
   需要手动启用，启用方法:  
   ```shell
   $ hexo new page categories
   ```

4. 标签
   `tag` 配置标签文件夹路径，
   与网站配置中 `tags` 设置的文件夹相同  
   需要手动启用，启用方法:  
   ```shell
   $ hexo new page tags
   ```

5. 关于
   `about` 一些介绍
   需要手动启用，启用方法：
   ```shell
   hexo new page about
   ```

### 功能配置
#### 文章目录
`toc` 全局选项，控制是否显示目录  
需要在文章 Front-matter^[front-matter] 区域添加 `toc: true` 以在文章内启用  

#### 公式渲染
`mathjax` 全局选项，控制是否渲染 Tex/Latex 代码
需要在文章 Front-matter 区域添加 `mathjax: true` 以在文章内启用  

[front-matter]: Front-matter 是文件最上方以 --- 分隔的区域
