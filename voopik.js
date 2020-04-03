$(document).ready(function () {
  $(".arrow").click(function (e) {
    $(".email-submit-btn").click();
  });

  $(".email-submit-btn").click(function (e) {
    e.preventDefault();

    var id = $(".email").val();
    if (id.includes("@")) {
      $(".error-msg").hide();
      $(".error-icon").hide();
    } else {
      $(".error-msg").show();
      $(".error-icon").show();
    }
  });
});
