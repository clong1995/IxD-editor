class Module {
    DOM() {
        // this.addContentDom = coo.query('.addContent', this.domain);
    }

    EVENT() {
        // coo.on('.addBtn', this.domain, 'click', t => this.showStory());
        // coo.on('.close', this.domain, 'click', t => this.hideStory());
    }

    INIT() {
        this.initList();
    }

    initList() {

    }

    showStory() {
        cp.show(this.addContentDom);
    }
}