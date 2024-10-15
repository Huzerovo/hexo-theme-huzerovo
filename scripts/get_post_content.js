hexo.extend.helper.register("get_post_content", function (post) {
  if (this.strip_html(post.excerpt) === "") {
    return this.truncate(this.strip_html(post.content), {
      length: 160,
      omission: "...",
    });
  } else {
    return this.strip_html(post.excerpt);
  }
});
