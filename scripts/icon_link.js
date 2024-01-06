// 添加一个链接

hexo.extend.helper.register("icon_link", function(attr) {
    let attr_string = '';
    let icon_class = '';

    if (attr) {
        if ('id' in attr) {
            attr_string = attr_string + ' id="' + attr.id + '"';
        }

        if ('title' in attr) {
            attr_string = attr_string + ' title="' + attr.title + '"';
        }

        if ('href' in attr) {
            attr_string = attr_string + ' href="' + attr.href + '"';
        }

        if ('icon_class' in attr) {
            icon_class = 'class="' + attr.icon_class + '"';
        }
    }

    if (attr_string === '' && icon_class === '') {
        return '';
    }

    return '<a class="icon-button" ' + attr_string + '>'
        + '<i ' + icon_class + '></i>'
        + '</a>'
});
