$(document).on("change", function () {
    // activate on keyboard input or state changed
    $(".modal.active input").on("keyup change", function () {
      var keyEmpty = false;
      var checkEmpty = true;

      $(".modal.active input").each(function () {
        // if input field is empty or not one checkbox is checked
        if ($(this).val().trim() == "") {
          keyEmpty = true;
        } else if (this.checked) {
          checkEmpty = false;
        }
      });

      // if no checkboxes present on current form
      if ($(".modal.active [type=checkbox]").length == 0) {
        checkEmpty = false;
      }

      // if not empty - button enabled, else - disabled again
      if (keyEmpty == false && checkEmpty == false) {
        $(".modal.active button[type=submit]").removeAttr("disabled");
      } else {
        $(".modal.active button[type=submit]").attr("disabled", "disabled");
      }
    });
})();