function submitMovieReview() {
  const $container = $("<div>");
  const $title = $("#title").val();
  const $rating = $("#rating").val();
  const $button = $("<button>", {text: "Delete"});
  $button.on("click", (evt) => {
    $(evt.target.parentElement).remove();
  });

  $container.append(`${$title}: ${$rating} `).append($button);

  $("#reviews").append($container);
}

$("#submit").on("click", submitMovieReview);