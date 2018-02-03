$(document).ready(function() {
  $("#formOne").submit(function(event) {
    var personInput = $("input#personName").val();
    $(".personName").text(personInput);
    $("#letter").show();

    event.preventDefault();
  });
});
