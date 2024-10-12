// 判断是否使用Hexo自带的高亮

hexo.extend.helper.register("is_use_hexo_highlighter", function () {
  // hexo version > 7.0.0
  if (
    this.config.syntax_highlighter &&
    (this.config.highlight.enable || this.config.prismjs.enable)
  ) {
    return true;
  }
  return false;
});
