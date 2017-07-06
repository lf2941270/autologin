const strategies = [{
    nama: '智能保护平台',
    feature: function () {
        return $('title').text().indexOf('智能保护平台') >= 0
    },
    action: function () {
        $('#login_txtUserName').val('admin');
        $('#login_txtUserPassword').val('admin@123');
        setTimeout(function () {
            $('#login_btnLogin').trigger('click')
        }, 200);
    }
},{
    nama: '工业防火墙',
    feature: function () {
        return $('title').text().indexOf('工业防火墙') >= 0
    },
    action: function () {
        $('#login_text_username').val('admin');
        $('#login_text_password').val('Acorn123!@#');
        $('#login_text_verifycode').val('@fw$');
        setTimeout(function(){
            document.querySelector("#login_text_username").dispatchEvent(new Event('change'));
            document.querySelector("#login_text_password").dispatchEvent(new Event('change'));
            document.querySelector("#login_text_verifycode").dispatchEvent(new Event('change'));
        })

        setTimeout(function () {
            $('#login_button_loginButton').trigger('click')
        }, 200);
    }
},{
    nama: '风险探知系统',
    feature: function () {
        return $('title').text().indexOf('shunter') >= 0
    },
    action: function () {
        location.href = '/t'
    }
}]

function autoLogin() {
    for(let strategy of strategies) {
        if(strategy.feature()) {
            return strategy.action()
        }
    }
}
autoLogin()



