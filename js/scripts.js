$(document).ready(function() {
  $("form#questions").submit(function(event) {
    var color = $("select#color").val();
    var browser = $("select#browser").val();
    var pc = $("select#pc").val();
    var city = $("select#city").val();
    event.preventDefault();

    if (value === "red" && "safary")
      $("")

  }


  $("form.language").submit(function(event) {
    var value = $("#language option:selected").val();
    event.preventDefault();

    if (value === "ruby") {
      $("python").hide();
      $("c#").hide();
      $("ruby").show();

    } else (value === "python") {
      $("ruby").hide();
      $("c#").hide();
      $("python").show();

    } if ( value === "c#"") {
      $("ruby").hide();
      $("python").hide();
      $("c#").show();

    }

  });

});
