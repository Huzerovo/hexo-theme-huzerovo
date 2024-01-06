// 获取文章封面，返回<script>标签

hexo.extend.helper.register('get_post_covers', function(post) {
    let covers = [];

    // 文章自定义封面
    if (post.photos) {
        for (photo of post.photos) {
            let is_http_or_https = new RegExp(/^(http|https):\/\/[^\s]*/gm).test(photo);
            if (is_http_or_https) {
                covers.push(photo);
            } else {
                // 检查是否使用绝对路径上的图片
                if (photo[0] !== '/') {
                    if (post.gallery && post.gallery !== '') {
                        covers.push(this.url_for(post.gallery) + '/' + photo);
                    } else {
                        // 使用文章资源文件夹下的图片
                        covers.push(this.url_for(post.path) + photo);
                    }
                } else {
                    // 使用绝对路径上的文件
                    covers.push(this.url_for(photo));
                }
            }
        } // for END
    }

    // 全局封面
    if (post.cover) {
        if (this.theme.covers) {
            this.theme.covers.forEach((e) => {
                covers.push(this.url_for(e));
            });
        }
    }

    return covers;
});
