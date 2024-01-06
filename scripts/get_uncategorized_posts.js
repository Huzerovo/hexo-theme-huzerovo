// 获取所有无分类文章

hexo.extend.helper.register("get_uncategorized_posts", function() {
    let uncategorized_posts = [];
    this.site.posts.each(function(post) {
        if (post.categories.length === 0 ) {
            uncategorized_posts.push(post);
        }
    });

    return uncategorized_posts;
})
