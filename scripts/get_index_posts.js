hexo.extend.helper.register("get_index_posts", function (index, posts) {
  let per_page = this.config.per_page;
  let current = index.current;
  let index_posts = posts.filter((_, i) => {
    return i >= (current - 1) * per_page && i < current * per_page;
  });
  return index_posts;
});
