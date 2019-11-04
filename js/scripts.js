$(document).ready(function() {
  $("form#survey").submit(function(event) {
    var color = parseInt($("#color option:selected").val());
    var browser = parseInt($("#browser option:selected").val());
    var pc = parseInt($("#pc option:selected").val());
    var city = parseInt($("#city option:selected").val());
    var lego = parseInt($("#lego option:selected").val());
    var result = (color + browser + pc + city + lego);
    event.preventDefault();
    // var result = calculate ();
    // console.log("result is:" + result)

  if (result <= 7) {
    $("#csharp").show();
    $("#python, #ruby").hide();

  } else if (result <= 14) {
      $("#python").show();
      $("#csharp, #ruby").hide();

  } else if (result < 22) {
      $("#ruby").show();
      $("#csharp, #python").hide();

      return (result);
  };
});



  $("form.language").submit(function(event) {
    var value = $("#language option:selected").val();
    event.preventDefault();

console.log();

    if (value === "ruby") {
      $("#python").hide();
      $("#csharp").hide();
      $("#ruby").show();

    } else if (value === "python") {
      $("#ruby").hide();
      $("#csharp").hide();
      $("#python").show();

    } else if (value === "csharp") {
      $("#ruby").hide();
      $("#python").hide();
      $("#csharp").show();

    }

  });

});
