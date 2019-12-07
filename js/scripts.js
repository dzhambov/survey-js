$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    var color = parseInt($("#color").val());
    var browser = parseInt($("#browser").val());
    var pc = parseInt($("#pc").val());
    var city = parseInt($("#city").val());
    var lego = parseInt($("#lego").val());
    var result = (color + browser + pc + city + lego);
    
  if (result <= 7) {
    $("#csharp").show();
    $("#python, #ruby").hide();

  } else if (result <= 14) {
      $("#python").show();
      $("#csharp, #ruby").hide();

  } else if (result <= 22) {
      $("#ruby").show();
      $("#csharp, #python").hide();

      return (result);

  };
});

});
