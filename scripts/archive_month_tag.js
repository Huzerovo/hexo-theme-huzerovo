hexo.extend.helper.register(
  "archive_month_tag",
  function (is_year, is_month, post) {
    let date_tag = post.date.format("MM-DD");
    if (is_year) {
      if (is_month) {
        return date_tag;
      }
      return '<a href="' + post.date.format("MM") + '" >' + date_tag + "</a>";
    }
    return (
      '<a href="' + post.date.format("YYYY/MM") + '" >' + date_tag + "</a>"
    );
  },
);
