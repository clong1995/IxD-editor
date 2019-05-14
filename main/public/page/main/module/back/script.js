class Module {
    DOM() {
        // this.addContentDom = coo.query('.addContent', this.domain);
    }

    EVENT() {
        cp.on('.back', DOMAIN, 'click', t => this.back());
        // coo.on('.close', this.domain, 'click', t => this.hideStory());
    }

    INIT() {
        //this.initList();
    }

    back() {
        cp.link('/content')
    }

    showStory() {
        cp.show(this.addContentDom);
    }
}