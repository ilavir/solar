function equalHeight(group) {
  tallest = 0;
  group.each(function () {
    thisHeight = $(this).outerHeight();
    if (thisHeight > tallest) {
      tallest = thisHeight;
    }
  });
  group.height(tallest);
}

$(window).load(function () {
  equalHeight($(".access-sidebar"));
  equalHeight($(".news-sidebar"));
  equalHeight($(".articles-sidebar"));
});
