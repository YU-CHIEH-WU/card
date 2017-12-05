$(function () {
    $(".uil-rolling-css").delay(5000).hide(0);
    setTimeout(function () {
        $("#password").attr('disabled', false);
    }, 5000);

    $("#submit").click(function (e) {
        var value = $("#password").val();
        if (value == "1210") {
            $(".title div").fadeOut();
            $(".title").delay(500).hide(0)
            $(".row").addClass("z-depth-2");
            $(".effect").delay(500).slideDown(1000).hide(0);
            $(".content").delay(1500).fadeIn();
        }
        else {
            $("#password").removeClass("valid").addClass("invalid");
            $("#hint").css('display', 'inline-block');
        }
    });
    $("#hint").click(function () {
        Materialize.toast('密碼是一個日期', 4000)
    });
});