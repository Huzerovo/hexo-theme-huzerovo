// 获取网站所有文章，置顶标记文章优先

hexo.extend.helper.register('get_posts_sort_with_pin', function() {
    let pin = [];
    let others = [];
    let posts = this.site.posts.sort('updated', 'desc');
    posts.each(function(post) {
        if (post.pin) {
            pin.push(post);
        } else {
            others.push(post);
        }
    });

    return pin.concat(others);
});
