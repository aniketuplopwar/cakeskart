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


@NgModule({
    imports: [
        BrowserModule
    ],
    declarations: [
        HomePageComponent,
        HeaderComponent,
        FooterComponent,
        PageLoader,
        CKPanel,
        CKImage,
        HomeHeroComponent,
        HeroSecondaryComponent,
        HeroBottomComponent
    ],
    bootstrap: [ HomePageComponent ]
})
export class AppModule {  
}
