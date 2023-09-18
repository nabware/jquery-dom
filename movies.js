"use strict";

/** Appends movie review in DOM with "title: rating <delete button>" */

function submitMovieReview() {
  const $container = $("<div>");
  const title = $("#title").val();
  const rating = $("#rating").val();
  const $button = $("<button>", {text: "Delete"}).addClass("review-delete");

  $container.append(`${title}: ${rating} `).append($button);

  $("#reviews").append($container);
}

$("#reviews").on("click", ".review-delete", (evt) => {
  $(evt.target.parentElement).remove();
});

$("#submit").on("click", submitMovieReview);