// 获取版权知识共享说明

hexo.extend.helper.register('get_cc', function() {
    let cc = this.theme.creativecommons;
    if (cc) {
        let link = '<a href="' + cc.link + '">' 
            + cc.license 
            + '</a>';
        return cc.description.replaceAll('#', link);
    }
    return '';
});
