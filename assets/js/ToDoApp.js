// Check off specific todo
$("ul").on("click", "li", function(e) {
  $(this).toggleClass("completed");
  e.stopPropagation();
});

// Click on X to delete todo
$("ul").on("click", "span", function(e) {
  e.stopPropagation();
  $(this)
    .parent()
    .fadeOut(500, function() {
      $(this).remove();
    });
});

// Creation of new todo
// Create an event listener to the input
// field to listen for enter key.
$("input[type='text']").keypress(function(e) {
  if (e.which === 13) {
    console.log("Enter was pressed");
    // Grabbing the text from input
    let todoText = $(this).val();
    $(this).val("");
    // Create a new li and add to ul
    $("ul").append(
      `<li><span><i class="far fa-trash-alt"></i></span> ${todoText} </li>`
    );
  }
});
