hexo.extend.helper.register("get_post_title", function (post) {
  if (!post) return "";
  if (post.title) return post.title;
  return this._p("untitled");
});
