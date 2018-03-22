class ToggleMenu {
    constructor(element) {
        this.element = document.getElementById(element);
        if (this.element === null) {
        // no toggle element can be found
        console.log('returned nothing')
        return;
        }
        this.selectors = {
            close: 'close',
            nav: 'nav',
            menu: 'menu'
        };

        this.bindEvents();
    }

    bindEvents() {
        this.closeNav();
        this.openNav();
    }
    closeNav() {
        var self = this;
        const close = document.querySelector('.' + this.selectors.close);
        close.addEventListener("click", function() {
            self.element.classList.toggle('active');
        });
    }
    openNav() {
        var self = this;
        const menu = document.querySelector('.' + this.selectors.menu);
        console.log('menu', menu);

        menu.addEventListener("click", function() {
            console.log('i found you');
            self.element.classList.toggle('active');
        });
    }
}

new ToggleMenu('nav');


