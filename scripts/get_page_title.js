// 获取页面标题

hexo.extend.helper.register("get_page_title", function (title) {
  if (title in this.theme.menu) {
    return this.theme.menu[title].title;
  } else {
    switch (title) {
      case "search":
      case "uncategorized":
        return this._p(title);
      default:
        return title.toUpperCase();
    }
  }
});
