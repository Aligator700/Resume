$('form').submit(function(e) {
    e.preventDefault();

    // if(!$(this).valid()) {
    //     return;
    // }

    $.ajax({
        type: "POST",
        url: "mailer/smart.php",
        data: $(this).serialize()
    }).done(function() {
        // $(this).find("input").val("");
        // $('#consultation, #order').fadeOut();
        // $('#overlay, #thanks').fadeIn('slow');

        $('form').trigger('reset');
    });
    return false;
});