class Module {
    DOM() {
        // this.addContentDom = coo.query('.addContent', DOMAIN);
    }

    EVENT() {
        cp.on('.item', DOMAIN, 'click', t => this.selectedItem(t));
        // coo.on('.close', this.domain, 'click', t => this.hideStory());
    }

    INIT() {

    }

    selectedItem(target) {
        cp.toggleActive(target);
    }
}