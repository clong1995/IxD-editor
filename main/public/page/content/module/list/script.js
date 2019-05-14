class Module {
    DOM() {
        // this.addContentDom = coo.query('.addContent', DOMAIN);
    }

    EVENT() {
        cp.on('.inner', DOMAIN, 'click', t => this.edit());
        // coo.on('.close', this.domain, 'click', t => this.hideStory());
    }

    INIT() {
        this.defaultSize = 180;
        this.autoSize();
        this.loadItem();
        window.onresize = () => this.autoSize();
    }

    loadItem() {
        let html = '';
        for (let i = 0; i < 50; i++) {
            html += `<div class="item">
                <div class="inner"></div>
            </div>`;
        }
        cp.html(DOMAIN, html);
    }

    edit(){
        cp.link('/main');
    }

    autoSize() {
        let {width} = cp.domSize(DOMAIN);
        /*
        //取模:不定长和基数取模
        let mod = width % this.defaultSize;
        //取商:不定长和基数取商
        let div = Math.floor(width / this.defaultSize);
        //取模的商
        let modDiv = mod / div;
        //基数加模的商
        let autoWidth = width + modDiv;
        */
        //自动适应的宽度
        let autoWidth = Math.floor(width % this.defaultSize / Math.floor(width / this.defaultSize) + this.defaultSize);

        //移除尺寸
        cp.removeClass(DOMAIN, /^auto-/g);
        //目标类名
        let clazz = 'auto-' + autoWidth + '' + autoWidth;
        let selectorText = '#' + NAME + '.' + clazz + ' > .item';
        //判断是否存在样式
        !cp.hasSheet(selectorText) && cp.setSheet(selectorText, {
            width: autoWidth + 'px',
            height: autoWidth + 'px'
        });
        cp.addClass(DOMAIN, clazz);
    }
}