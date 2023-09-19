"use strict";

/** Appends movie review in DOM with "title: rating <delete button>" */

function submitMovieReview() {
  const $container = $("<div>").addClass("review-container");
  const title = $("#title").val();
  const rating = $("#rating").val();
  if (rating === "" || rating < 0 || rating > 10 || title.length < 2) return;
  const $button = $("<button>", {text: "Delete"}).addClass("review-delete");

  $container.append(`${title}: ${rating} `).append($button);

  $("#reviews").append($container);

}

/**https://www.geeksforgeeks.org/how-to-sort-a-list-alphabetically-using-jquery/ */
/**Returns a, b comparison for sorting by Name*/
function sortByName(a, b){
  return ($(b).text().toUpperCase()) < ($(a).text().toUpperCase()) ? 1 : -1;
}

/**Returns a, b comparison for sorting by Rating*/
function sortByRating(a, b){
  const bText = $(b).text();
  const bRating = parseInt(bText.substring(bText.lastIndexOf(":") + 2))
  const aText = $(a).text();
  const aRating = parseInt(aText.substring(aText.lastIndexOf(":") + 2))
  return (bRating < aRating) ? 1 : -1;

}


$("#name-sort").on("click", function() {
  $("#reviews .review-container").sort(sortByName).appendTo('#reviews')});

$("#rating-sort").on("click", function() {
  $("#reviews .review-container").sort(sortByRating).appendTo('#reviews')});


$("#reviews").on("click", ".review-delete", (evt) => {
  $(evt.target.parentElement).remove();
});

$("#submit").on("click", submitMovieReview);