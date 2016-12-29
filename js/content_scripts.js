function autoLogin() {
    $('#login_text_username').val('admin');
    $('#login_text_password').val('admin@161231');
    $('#login_text_verifycode').val('@c0rnC0d$').change()
    $('#login_text_verifycode').trigger('input');
    document.querySelector("#login_text_username").dispatchEvent(new Event('change'));
    document.querySelector("#login_text_password").dispatchEvent(new Event('change'));
    document.querySelector("#login_text_verifycode").dispatchEvent(new Event('change'));

    setTimeout(function () {
        $('#login_button_loginButton').trigger('click')
    }, 100);
}
autoLogin()