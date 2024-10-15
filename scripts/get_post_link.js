hexo.extend.helper.register("get_post_link", function (post) {
  if (!post) return "";
  if (post.link && post.link !== "") return post.link;
  return this.url_for(post.path);
});
