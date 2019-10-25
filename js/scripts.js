$(document).ready(function() {
  $("form.language").submit(function(event) {
    var value = $("#language option:selected")
    event.preventDefault();

    if (value === "ruby") {
      $("python").hide();
      $("c#").hide();
      $("ruby").show();

    } else (value === "python") {
      $("ruby").hide();
      $("c#").hide();
      $("python").show();

   } else ( value === "c#"")
      $("ruby").hide();
      $("python").hide();
      $("c#").show();

    }

  });

});
