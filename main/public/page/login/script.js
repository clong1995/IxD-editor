class App {
    DOM() {

    }

    //初始化函数
    INIT() {
        this.qrcode = null;
        this.loadQrcode("http://www.chenglonggege.com?t=123");
        setTimeout(() => this.reloadQrcode("http://www.chenglonggege.com?t=456"), 1000)
    }

    //添加事件
    EVENT() {
        cp.on('.guest', 'click', () => this.guestLogin());

    }

    guestLogin() {
        let c = confirm("访客模式下仅为试用，数据将不定期清除！！");
        if (c === true) {
            cp.link('/main');
        } else {
            return;
        }
    }

    loadQrcode(content) {
        this.qrcode = new QRCode('qrcode', {
            text: content,
            width: 180,
            height: 180,
            //colorDark: '#000000',
            //colorLight: '#ffffff',
            //correctLevel: QRCode.CorrectLevel.H
        });
    }

    reloadQrcode(content) {
        this.qrcode.clear();
        this.qrcode.makeCode(content);
    }
}