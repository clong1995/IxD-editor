class Module {
    DOM() {
        // this.addContentDom = coo.query('.addContent', this.domain);
    }

    EVENT() {
        cp.on('.sort', DOMAIN, 'click', t => this.selectedSort(t));
        // coo.on('.close', this.domain, 'click', t => this.hideStory());
    }

    INIT() {
    }

    selectedSort(target) {
        cp.toggleActive(target)
    }
}