$(document).ready(function() {
    // Hide the "attending options" and "volunteer options" sections initially
    $("#attending-options, #volunteer-question").hide();
    $("#sorry-message").hide();
    $("#volunteer-options").hide();
    $("#success-message").hide();

    // Show the "attending options" section when user selects "yes" for attending
    $("#attending-yes").click(function() {
        $("#attending-options").show();
        $("#continue-button").show();
    });
    // Show the "sorry" message when user selects "no" for attending
    $("#attending-no").click(function() {
        $("#sorry-message").show();
    });

    // Show the "volunteer question" section when the user clicks the "continue" button
    $("#continue-button").click(function() {
        $("#volunteer-question").show();
    });

    // Show the "volunteer options" section when user selects "yes" for volunteering
    $("#volunteer").click(function() {
        $("#volunteer-options").show();
    });

    // Send form data to email address when submit button is clicked
    $("#rsvp-form").submit(function(e) {
        e.preventDefault();
        var formData = $(this).serialize();
        $.ajax({
            type: "POST",
            url: "https://example.com/send-form-data.php",
            data: formData + "&email=jj.47.johnson@gmail.com",
            success: function() {
                $("#success-message").show();
            }
        });
    });
});
