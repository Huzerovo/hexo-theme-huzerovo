// Like list_categories
// but ONLY support 'class' and 'show_count' field
// option {
//   class?: string;
//   show_count?:  boolean;
// }
hexo.extend.helper.register("list_uncategorized", function (option) {
  let className = "category";
  let showCount = true;
  let result = "";
  if (option) {
    if (option.class) {
      if (typeof option.class === "string") {
        className = option.class;
      }
    }
    if (option.show_count) {
      if (typeof option.show_count === "boolean") {
        showCount = option.show_count;
      }
    }
  }

  if (this.config.default_category) {
    result += '<ul class="' + className + '-list">';
    result += '<li class="' + className + '-list-item">';
    result += '<a class="' + className + '-list-link" href="/uncategorized">';
    result += this._p("uncategorized");
    result += "</a>";
    if (showCount) {
      result +=
        '<span class="category-list-count">' +
        this.get_uncategorized_posts().length +
        " </span>";
    }
    result += "</li>";
    result += "</ul>";
  }
  return result;
});
