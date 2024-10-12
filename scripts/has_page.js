// 判断页面是否存在

hexo.extend.helper.register("has_page", function (title) {
  for (let i = 0; i < this.site.pages.length; i++) {
    if (this.site.pages.data[i].title === title) {
      return true;
    }
  }
  return false;
});
