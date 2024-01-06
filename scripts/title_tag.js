// 设置网站标题

hexo.extend.helper.register("title_tag", function() {
    let tail_str = '';
    if (this.config.subtitle !== '') {
        tail_str = tail_str + ' - ' + this.config.subtitle;
    }
    if (this.config.description !== '') {
        tail_str = tail_str + ' | ' + this.config.description;
    }

    if (this.is_post()) {
        return '<title>' + this.page.title + tail_str + "</title>";
    } else {
        return '<title>' + this.config.title + tail_str + "</title>";
    }
});
