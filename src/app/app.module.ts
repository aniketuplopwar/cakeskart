import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HomePageComponent} from './layouts/home/homepage.component';
import { HeaderComponent} from './ui-components/header/header.component';
import { FooterComponent} from './ui-components/footer/footer.component';
import { PageLoader } from './ui-components/pageloader/pageloader.component';
import { CKPanel } from './ui-components/panel/panel.component';
import { CKImage } from './ui-components/image/image.component';
import { HomeHeroComponent } from './components/home/hero/hero.component';
import { HeroSecondaryComponent } from './components/home/heroSecondary/hero.secondary.component';
import { HeroBottomComponent } from './components/home/heroBottom/hero.bottom.component';
import { RouterModule, Routes } from "@angular/router";
import { AboutUsComponent } from "./layouts/aboutus/aboutus.component";
import { BaseComponent} from "./layouts/base/base.component";
import { ProductsComponent} from "./layouts/products/products.component";

const appRoutes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    {path: 'home', component: HomePageComponent},
    {path: 'aboutus', component:AboutUsComponent},
    { path: 'products', component: ProductsComponent}
];




@NgModule({
    imports: [
        BrowserModule,
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // <-- debugging purposes only
        )
    ],
    declarations: [
        HomePageComponent,
        BaseComponent,
        AboutUsComponent,
        ProductsComponent,
        HeaderComponent,
        FooterComponent,
        PageLoader,
        CKPanel,
        CKImage,
        HomeHeroComponent,
        HeroSecondaryComponent,
        HeroBottomComponent
    ],
    bootstrap: [ BaseComponent ]
})
export class AppModule {  
}
