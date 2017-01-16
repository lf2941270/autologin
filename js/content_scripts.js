function autoLogin() {
    $('#login_text_username').val('admin');
    $('#login_text_password').val('admin@161231');
    $('#login_text_verifycode').prop('maxlength', '').attr('maxlength', '').removeClass('ng-valid-maxlength').removeClass('ng-valid').val('@fw$')
    setTimeout(function(){
        document.querySelector("#login_text_username").dispatchEvent(new Event('change'));
        document.querySelector("#login_text_password").dispatchEvent(new Event('change'));
        document.querySelector("#login_text_verifycode").dispatchEvent(new Event('change'));
    })

    setTimeout(function () {
        $('#login_button_loginButton').trigger('click')
    }, 200);
}
autoLogin()

