// 获取文章封面，返回<script>标签

hexo.extend.helper.register('get_post_covers', function(post) {
    let covers = [];

    // 文章自定义封面
    if (post.photos) {
        for (photo of post.photos) {
            // 判断使用：本地或者网络图片
            let is_http_or_https = new RegExp(/^(http|https):\/\/[^\s]*/gm).test(photo);
            if (is_http_or_https) {
                covers.push(photo);
            } else {
                if (photo[0] !== '/') {
                    // 使用资源文件夹里的图片
                    covers.push(this.url_for(post.path) + photo);
                } else {
                    // 使用绝对路径上的图片
                    covers.push(this.url_for(photo));
                }
            }
        } // for END
    }

    // 是否追加全局封面
    if (post.cover) {
        if (this.theme.covers) {
            this.theme.covers.forEach((e) => {
                covers.push(this.url_for(e));
            });
        }
    }

    return covers;
});
