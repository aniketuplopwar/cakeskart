webpackJsonp([1],{1077:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),c=n(1078),i=function(){function ProductsComponent(e){this._productService=e}return ProductsComponent.prototype.ngOnInit=function(){this.categories=this._productService.getProductCategories()},ProductsComponent=o([a.Component({selector:"ck-products",template:n(1079),providers:[c.ProductsService],styles:[n(1080)]}),r("design:paramtypes",[c.ProductsService])],ProductsComponent)}();t.ProductsComponent=i},1078:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function ProductsService(){}return ProductsService.prototype.getProductCategories=function(){return[{label:"Cakes",href:"products/Cakes",categoryImage:"/images/tiles/cakes/cake-0.png"},{label:"Cup cakes",href:"products/CupCakes",categoryImage:"/images/tiles/cakes/cupcake-2.jpeg"},{label:"Macroons",href:"products/macroon",categoryImage:"/images/tiles/macroon/macroon-1.jpg"},{label:"Cake jars",href:"products/cakejars",categoryImage:"/images/tiles/cakes/cake-jar-1.jpg"}]},ProductsService=o([r.Injectable()],ProductsService)}();t.ProductsService=a},1079:function(e,t){e.exports='<ck-panel theme="">\n    <div class="products">\n        <div class="category-list">\n            <div class="category" *ngFor="let category of categories">\n                <a href=\'{{category.href}}\'>\n                    <ck-image imgSrc=\'{{category.categoryImage}}\'\n                              height="250" width="250">\n                    </ck-image>\n                    <p class="category-label">\n                        {{category.label}}\n                    </p>\n                </a>\n            </div>\n        </div>\n    </div>\n</ck-panel>'},1080:function(e,t){e.exports=".category-list {\n  display: flex;\n  justify-content: center;\n  flex-wrap: wrap; }\n  .category-list a {\n    text-decoration: none;\n    color: #333; }\n  .category-list .category {\n    margin: 20px;\n    text-align: center; }\n"},495:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=n(97),c=n(613),i=n(615),l=n(614),s=n(617),p=n(618),f=n(616),d=n(608),u=n(610),h=n(609),m=n(280),g=n(611),y=n(612),v=n(1077),b=[{path:"",redirectTo:"/home",pathMatch:"full"},{path:"home",component:c.HomePageComponent},{path:"aboutus",component:g.AboutUsComponent},{path:"products",component:v.ProductsComponent}],k=function(){function AppModule(){}return AppModule=o([r.NgModule({imports:[a.BrowserModule,m.RouterModule.forRoot(b,{enableTracing:!0})],declarations:[c.HomePageComponent,y.BaseComponent,g.AboutUsComponent,v.ProductsComponent,i.HeaderComponent,l.FooterComponent,s.PageLoader,p.CKPanel,f.CKImage,d.HomeHeroComponent,u.HeroSecondaryComponent,h.HeroBottomComponent],bootstrap:[y.BaseComponent]})],AppModule)}();t.AppModule=k},608:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function HomeHeroComponent(){}return HomeHeroComponent=o([r.Component({selector:"hero-home",template:n(776),styles:[n(787)]})],HomeHeroComponent)}();t.HomeHeroComponent=a},609:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function HeroBottomComponent(){}return HeroBottomComponent=o([r.Component({selector:"hero-bottom",template:n(777),styles:[n(788)]})],HeroBottomComponent)}();t.HeroBottomComponent=a},610:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function HeroSecondaryComponent(){}return HeroSecondaryComponent=o([r.Component({selector:"hero-home-secondary",template:n(778),styles:[n(789)]})],HeroSecondaryComponent)}();t.HeroSecondaryComponent=a},611:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function AboutUsComponent(){}return AboutUsComponent=o([r.Component({selector:"ck-aboutus",template:n(779)})],AboutUsComponent)}();t.AboutUsComponent=a},612:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function BaseComponent(){}return BaseComponent=o([r.Component({selector:"ck-main",template:n(780)})],BaseComponent)}();t.BaseComponent=a},613:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function HomePageComponent(){}return HomePageComponent=o([r.Component({selector:"ck-home",template:n(781)})],HomePageComponent)}();t.HomePageComponent=a},614:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function FooterComponent(){}return FooterComponent=o([r.Component({selector:"ck-footer",template:n(782),styles:[n(790)]})],FooterComponent)}();t.FooterComponent=a},615:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function HeaderComponent(){this.links=[{href:"home",label:"Home"},{href:"products",label:"Products"},{href:"locations",label:"Locations"},{href:"contactus",label:"Contact us"},{href:"aboutus",label:"About us"}]}return HeaderComponent=o([r.Component({selector:"ck-header",template:n(783),styles:[n(791)]})],HeaderComponent)}();t.HeaderComponent=a},616:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),c=function(){function CKImage(){}return o([a.Input(),r("design:type",String)],CKImage.prototype,"imgSrc",void 0),o([a.Input(),r("design:type",Number)],CKImage.prototype,"height",void 0),o([a.Input(),r("design:type",Number)],CKImage.prototype,"width",void 0),CKImage=o([a.Component({selector:"ck-image",template:n(784),styles:[n(792)]})],CKImage)}();t.CKImage=c},617:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c};Object.defineProperty(t,"__esModule",{value:!0});var r=n(1),a=function(){function PageLoader(){this.loadingText="Baking..."}return PageLoader=o([r.Component({selector:"ck-page-loader",template:n(785),styles:[n(793)]})],PageLoader)}();t.PageLoader=a},618:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,a=arguments.length,c=a<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(e,t,n,o);else for(var i=e.length-1;i>=0;i--)(r=e[i])&&(c=(a<3?r(c):a>3?r(t,n,c):r(t,n))||c);return a>3&&c&&Object.defineProperty(t,n,c),c},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(1),c=function(){function CKPanel(){}return o([a.Input(),r("design:type",String)],CKPanel.prototype,"panelTitle",void 0),o([a.Input(),r("design:type",String)],CKPanel.prototype,"theme",void 0),CKPanel=o([a.Component({selector:"ck-panel",template:n(786),styles:[n(794)]})],CKPanel)}();t.CKPanel=c},619:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(185),r=n(495);o.platformBrowserDynamic().bootstrapModule(r.AppModule)},776:function(e,t){e.exports='<div class=\'hero-home row\'>\n   <div class=\'col-md-5 col-xs-12\'> \n       <ul class=\'ovarlap-images\'> \n           <li>\n\n                <ck-image imgSrc="/images/tiles/cakes/cake-0.png"\n                    height="250" width="250">\n                    </ck-image>\n           </li>\n           <li>\n                <ck-image imgSrc="/images/tiles/cakes/cake-1.jpg" \n                    height="250" width="250">\n                    </ck-image>\n           </li>\n           \n       </ul>            \n                        \n    </div>\n\n    <div class=\'col-md-7 col-xs-12 text-right\'><h2>Best home made cakes </h2>\n        <p> Chocolate, Pinneapple, Strawberry, Blueberry...and so on</p>    \n    </div>                        \n</div>\n                    '},777:function(e,t){e.exports='<div class=\'hero-home row\'>\n   <div class=\'col-md-5\'> \n       <ul class=\'ovarlap-images\'> \n           <li>\n\n                <ck-image imgSrc="/images/tiles/cakes/cupcake-1.jpg" \n                    height="250" width="250">\n                    </ck-image>\n           </li>\n           <li>\n                <ck-image imgSrc="/images/tiles/cakes/cupcake-2.jpeg" \n                    height="250" width="250">\n                    </ck-image>\n           </li>\n           \n       </ul>            \n                        \n    </div>\n\n    <div class=\'col-md-7 text-right\'><h2>Best home made Cup Cakes </h2>\n        <p> Chocolate, Strawberry, Blueberry...and so on</p>    \n    </div>                        \n</div>\n                    '},778:function(e,t){e.exports='<div class=\'hero-home-secondary row\'>\n\n     \n   <div class=\'col-md-5 col-xs-12 pull-right\'> \n       <ul class="ovarlap-images">\n           <li>     <ck-image imgSrc="/images/tiles/cakes/cake-jar-1.jpg" \n                    height="250" width="300">\n                    </ck-image>\n           </li>\n           <li>\n               <ck-image imgSrc="/images/tiles/macroon/macroon-1.jpg"\n                    height="250" width="250">\n                    </ck-image>\n           </li>\n       </ul>\n                    \n                        \n    </div>\n\n    <div class=\'col-md-7 text-left col-xs-12 pull-left\'><h2>Mousse & Cake Jars </h2>\n        <p> Chocolate Mousse, Strawberry Mousse, Raspberry...and so on</p>    \n    </div> \n\n                          \n</div>\n                    '},779:function(e,t){e.exports="<div>\n    <ck-panel theme='peach'>\n        <h3> About Us</h3>\n        <p style=\"width:50%\">\n            Cakes kart is a home grown bakery, based out of Pune. Baking is our passion, and making people happy with our taste motivates us.\n            We take orders for cakes, pastries, cupcakes, and few other bakery items.\n\n            We offer, onsite delivery and pickup of items.\n\n        </p>\n    </ck-panel>\n</div>"},780:function(e,t){e.exports='<section class=\'app-content\'>\n    <header class="container"><ck-header> </ck-header></header>\n   <section> <router-outlet></router-outlet> </section>\n<footer class="container"><ck-footer> </ck-footer></footer>\n</section>'},781:function(e,t){e.exports="<ck-panel theme='peach'>\n    <hero-home></hero-home>\n</ck-panel>\n<ck-panel theme='light-cyan'>\n    <hero-home-secondary></hero-home-secondary>\n</ck-panel>\n<ck-panel theme='pink'>\n    <hero-bottom></hero-bottom>\n</ck-panel>\n"},782:function(e,t){e.exports="<section class=\"ck-footer-content\">\n    \n    <footer>\n       Copyright 2017 <a href='http://wwwcakeskart.com'>www.cakeskart.com</a>. All Rights Reserved.\n    </footer>\n</section>"},783:function(e,t){e.exports='<section class="ck-header-content">\n    <header class="pull-left"> \n        <h1>CakesKart.com</h1>\n    </header>\n    <footer class="pull-right">\n        <nav class="hidden-xs">\n\n            <ul>\n                <li *ngFor="let link of links"> \n                <a href="{{link.href}}"> {{link.label}}</a>\n                </li>\n            </ul>\n        </nav>\n    \n        <div class="pull-right">Call us to order: +91-779 867 8800</div>\n    </footer>\n</section>'},784:function(e,t){e.exports="<span class='ck-image-container'> \n        <span class='image-wrapper'> \n            <img [src]=\"imgSrc\" alt='alt-text' height='{{height}}' width='{{width}}'/></span>\n    </span>   "},785:function(e,t){e.exports='\n   \n    <section>\n            <div class="absolute-center loader">\n                <div>{{ loadingText }}</div>\n            </div>\n    </section>'},786:function(e,t){e.exports="<section class='ck-panel-content {{theme}} jumbotron' >\n    <header>\n        <h2>{{panelTitle}}</h2>\n    </header>\n    <div class=\"container\">\n        <ng-content></ng-content>\n    </div>\n    <footer></footer>\n\n    </section>\n    "},787:function(e,t){e.exports=".hero-home {\n  position: relative;\n  height: 350px; }\n  .hero-home .text-right {\n    padding-top: 110px;\n    color: #6c3f21;\n    font-family: 'arsenal';\n    text-align: left; }\n    .hero-home .text-right h2 {\n      font-size: 36px;\n      text-shadow: 1px 1px #666; }\n    .hero-home .text-right p {\n      font-size: 18px; }\n  .hero-home .ovarlap-images {\n    position: relative;\n    height: 250px;\n    list-style: none; }\n    .hero-home .ovarlap-images li {\n      list-style: none;\n      display: inline-block;\n      position: absolute; }\n    .hero-home .ovarlap-images li:first-child {\n      left: 0;\n      top: -20px;\n      -ms-transform: rotate(-10deg);\n      /* IE 9 */\n      -webkit-transform: rotate(-10deg);\n      /* Chrome, Safari, Opera */\n      transform: rotate(-10deg); }\n    .hero-home .ovarlap-images li:last-child {\n      left: 25%;\n      top: 30%;\n      -ms-transform: rotate(5deg);\n      /* IE 9 */\n      -webkit-transform: rotate(5deg);\n      /* Chrome, Safari, Opera */\n      transform: rotate(5deg); }\n"},788:function(e,t){e.exports=".hero-home {\n  position: relative; }\n  .hero-home .text-right {\n    padding-top: 110px;\n    color: #fff;\n    font-family: 'arsenal';\n    text-align: left; }\n    .hero-home .text-right h2 {\n      font-size: 36px;\n      text-shadow: 1px 1px #f00; }\n    .hero-home .text-right p {\n      font-size: 18px; }\n  .hero-home .ovarlap-images {\n    position: relative;\n    height: 250px;\n    list-style: none; }\n    .hero-home .ovarlap-images li {\n      list-style: none;\n      display: inline-block;\n      position: absolute; }\n    .hero-home .ovarlap-images li:first-child {\n      left: 0;\n      top: -20px;\n      -ms-transform: rotate(10deg);\n      /* IE 9 */\n      -webkit-transform: rotate(10deg);\n      /* Chrome, Safari, Opera */\n      transform: rotate(10deg); }\n    .hero-home .ovarlap-images li:last-child {\n      left: 25%;\n      top: 30%;\n      -ms-transform: rotate(-5deg);\n      /* IE 9 */\n      -webkit-transform: rotate(-5deg);\n      /* Chrome, Safari, Opera */\n      transform: rotate(-5deg); }\n"},789:function(e,t){e.exports=".hero-home-secondary {\n  position: relative;\n  height: 350px; }\n  .hero-home-secondary .text-left {\n    padding-top: 110px;\n    color: #6c3f21;\n    font-family: 'arsenal';\n    text-align: right;\n    text-shadow: 1px 1px #aaa; }\n    .hero-home-secondary .text-left h2 {\n      font-size: 36px; }\n    .hero-home-secondary .text-left p {\n      font-size: 18px; }\n  .hero-home-secondary .ovarlap-images {\n    position: relative;\n    height: 250px;\n    list-style: none; }\n    .hero-home-secondary .ovarlap-images li {\n      list-style: none;\n      display: inline-block;\n      position: absolute; }\n    .hero-home-secondary .ovarlap-images li:first-child {\n      right: 0;\n      top: -20px;\n      -ms-transform: rotate(10deg);\n      /* IE 9 */\n      -webkit-transform: rotate(10deg);\n      /* Chrome, Safari, Opera */\n      transform: rotate(10deg) img;\n        transform-height: auto; }\n    .hero-home-secondary .ovarlap-images li:last-child {\n      right: 35%;\n      top: 30%;\n      -ms-transform: rotate(-5deg);\n      /* IE 9 */\n      -webkit-transform: rotate(-5deg);\n      /* Chrome, Safari, Opera */\n      transform: rotate(-5deg); }\n"},790:function(e,t){e.exports=".ck-footer-content {\n  color: #6c3f21;\n  padding-top: 70px;\n  padding-bottom: 30px; }\n  .ck-footer-content footer {\n    color: #999;\n    font-family: Arial, Helvetica, sans-serif;\n    font-size: 12px;\n    padding-left: 10px; }\n"},791:function(e,t){e.exports=".ck-header-content {\n  color: #6c3f21; }\n  .ck-header-content h1 {\n    font-family: 'Kaushan Script';\n    font-size: 36px;\n    text-shadow: 2px 1px #ddd; }\n  .ck-header-content ul,\n  .ck-header-content li {\n    display: inline-block;\n    padding: 0;\n    margin: 0; }\n  .ck-header-content nav > ul > li {\n    margin: 10px; }\n    .ck-header-content nav > ul > li a,\n    .ck-header-content nav > ul > li a:hover,\n    .ck-header-content nav > ul > li a:link,\n    .ck-header-content nav > ul > li a:visited,\n    .ck-header-content nav > ul > li a:active {\n      text-decoration: none;\n      color: #333; }\n"},792:function(e,t){e.exports=".ck-image-container {\n  background: #fff;\n  display: inline-block;\n  padding: 5px;\n  border: 1px solid #efefef;\n  box-shadow: 2px 2px 2px 0px #666; }\n  .ck-image-container .image-wrapper {\n    display: inline-block;\n    padding: 2px;\n    border-color: #6c3f21; }\n"},793:function(e,t){e.exports="section .absolute-center {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  transform: translate(-50%, -50%); }\n\nsection .loader {\n  font-size: 24px;\n  text-align: center;\n  color: #fff; }\n  section .loader img {\n    width: 120px; }\n"},794:function(e,t){e.exports=".ck-panel-content {\n  margin: 10px 0;\n  min-height: 60px;\n  padding: 20px;\n  border: 1px solid #ddd;\n  background: linear-gradient(#ffbbdd, #f06292);\n  box-shadow: 2px 2px 4px 0px #999; }\n  .ck-panel-content h2 {\n    margin-top: 0px; }\n  .ck-panel-content.light-cyan {\n    background: #aeebdf;\n    border-color: #aeebdf;\n    color: White; }\n  .ck-panel-content.peach {\n    background: #FFB9BB;\n    border-color: #FFB9BB;\n    color: #6c3f21; }\n  .ck-panel-content.pink {\n    background: #ff485b;\n    border-color: #ff485b;\n    color: #fff; }\n"}},[619]);