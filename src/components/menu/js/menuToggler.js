class MenuToggler {
        constructor(data) {
            this.menuTriggerSelector = data.menuTriggerSelector;
            this.menuSelector = data.menuSelector;
            this.type = data.type || 'appear'; //type of Apperance
            this.transitionTime = data.transitionTime || '.25s';
            this.transitionType = data.transitionType || '.ease';
            this.menuDisplay = data.menuDisplay || 'block';
            this.slideBegin = data.slideBegin || 'translate(-100%, 0px)';//Begin coordinate (x, y). Обязательно добавлять px к любому числу
            this.slideEnd = data.slideEnd || 'translate(0px, 0px)';//Begin coordinate (x, y). Обязательно добавлять px к любому числу
            
            
            this.menuTrigger = document.querySelector(`${this.menuTriggerSelector}`);
            this.menuFirstTrigger = document.querySelector(`.menu-toggler`);
            this.menu = document.querySelector(`${this.menuSelector}`);
            this.isChanging = false;
            this.state = 'hide';

            this.init();
        }

        init() {

            this.menuTrigger.addEventListener('click', this.toggle.bind(this));
           
            
            if (this.type == 'appear') {
                // add first styles, makes elem invisible and untouchuble
                //this.menu.style.transition = 'none';
                this.menu.style.height = '0';
                this.menu.style.opacity = 0;
                this.menu.style.display = 'none';



                //                this.menu.style.cssText = `-webkit-transition: opacity ${this.transitionTime} ${this.transitionType} ${this.transitionTime}, height 0s ${this.transitionType} 0s`;
                //                this.menu.style.cssText = `-o-transition: opacity ${this.transitionTime} ${this.transitionType} ${this.transitionTime}, height 0s ${this.transitionType} 0s`;

                

                this.menu.addEventListener('transitionend', (e) => {
                    if (e.target == this.menu) {
                        this.isChanging = false;

                        if (this.state == 'hide') {
                            this.menu.style.display = 'none'
                        }
                    }

                });
            }
            
            if(this.type == 'slide'){
                document.body.style.overflowX = 'hidden';
                
                
                this.setVendorStyleProperty(this.menu, 'transition', `transform ${this.transitionTime} ${this.transitionType}`);
                this.setVendorStyleProperty(this.menu, 'transform', this.slideBegin);
                
                this.setVendorStyleProperty(this.menuTrigger.querySelector('.menu-toggler__img'), 'transition', `transform ${this.transitionTime} ${this.transitionType}`);
            }

        }

        setVendorStyleProperty (element, property, value) {

                    element.style["webkit" + property] = value;
                    element.style["moz" + property] = value;
                    element.style["ms" + property] = value;
                    element.style["o" + property] = value;
                    element.style[property] = value;
                

            }
        
        toggle() {

            if (this.type == 'appear' && !this.isChanging) {

                if (this.menu.style.opacity == '1') {
                    this.setVendorStyleProperty(this.menu, 'transition', `opacity ${this.transitionTime} ${this.transitionType}`);

                    if (this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))) {
                        this.menuTrigger.classList.remove('close');
                    }

                    this.state = 'hide';
                    this.menu.style.height = '0';
                    this.menu.style.opacity = '0';
                    this.isChanging = true;
                    return;
                }
                if (this.menu.style.opacity == '0') {

                    
                    if (this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))) {
                        this.menuTrigger.classList.add('close');
                    }
                    
                    
                    this.state = 'show';
                    this.menu.style.display = this.menuDisplay;
                    setTimeout(() => {
                        this.setVendorStyleProperty(this.menu, 'transition', `opacity ${this.transitionTime} ${this.transitionType}`);
                        this.menu.style.height = 'initial';
                        this.menu.style.opacity = '1';
                        this.isChanging = true
                    }, 1);
                    return;
                }

            }
            
            if (this.type == 'slide' && !this.isChanging) {
                
                
                if(this.menu.style.transform == this.slideBegin){
                    if (this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))) {
                        this.menuFirstTrigger.classList.add('close');
                    }
                    
                    this.setVendorStyleProperty(this.menu, 'transform', this.slideEnd);
                    
                }
                else{
                    if (this.menuTrigger.classList.contains(this.menuTriggerSelector.slice(1))) {
                        this.menuFirstTrigger.classList.remove('close');
                    }
                    
                     this.setVendorStyleProperty(this.menu, 'transform', this.slideBegin);
                }
                
            }
        }
    }


document.addEventListener('DOMContentLoaded', () => {

    const initToggler = () => {
        
            const menuToggler1 = new MenuToggler({
            menuTriggerSelector: '.menu-toggler', //if burger, to onClick add class burger_close
            menuSelector: '.menu-wrapper',
            transitionTime: '.5s',
            transitionType: 'linear',
            menuDisplay: 'grid',
            type: 'slide', //appear by default
            slideBegin: 'translate(-200%, 0px)', // Обязательно добавлять px к любому числу
            slideEnd: 'translate(0px, 0px)', // Обязательно добавлять px к любому числу
        });
        
        const allMenuItems = document.querySelectorAll('.menu__item');
        
        allMenuItems.forEach((item, index) => {
            
            const dataId = item.getAttribute('data-id');
            
            try{
                const menuToggler2 = new MenuToggler({
                    menuTriggerSelector: `.${dataId}`,
                    menuSelector: '.menu-wrapper',
                    transitionTime: '.5s',
                    transitionType: 'linear',
                    menuDisplay: 'grid',
                    type: 'slide', //appear by default
                    slideBegin: 'translate(-200%, 0px)', // Обязательно добавлять px к любому числу
                    slideEnd: 'translate(0px, 0px)', // Обязательно добавлять px к любому числу
                })
            }          
            catch{}

        });
    }
    
    if(window.innerWidth <= 450){

        initToggler();
    }
    
    window.addEventListener('resize', () => {
        if(window.innerWidth <= 450){
            initToggler();
        }
    })
    
});