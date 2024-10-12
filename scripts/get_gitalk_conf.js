// 获取gitalk配置选项

hexo.extend.helper.register("get_gitalk_conf", function (title, issue_id) {
  let conf = this.theme.gitalk.config;
  conf.number = -1;
  conf.title = "Article: " + title;
  if (typeof issue_id === "number") {
    conf.number = issue_id;
  }
  return JSON.stringify(conf);
});
