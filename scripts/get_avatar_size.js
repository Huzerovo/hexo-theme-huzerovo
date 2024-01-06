// 根据配置获取头像大小

hexo.extend.helper.register("get_avatar_size", function(size) {

    let avatar_size_style = 'width: 128px; height: 128px;'
    if (typeof(size) === 'string') {
        switch (size) {
            case 'small':
                avatar_size_style = 'width: 64px; height: 64px;'
                break;
            case 'normal':
                avatar_size_style = 'width: 128px; height: 128px;'
                break;
            case 'large':
                avatar_size_style = 'width: 256px; height: 256px;'
                break;
            default:
                avatar_size_style = 'width: 128px; height: 128px;'
                break;
        }
    } else if (typeof(size) === 'number') {
        avatar_size_style = avatar_size_style.replace(/128/g, Math.floor(size).toString());
    }
    return avatar_size_style;
});
