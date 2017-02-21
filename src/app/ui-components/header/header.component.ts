
import {Component} from '@angular/core';

@Component({
    selector : 'ck-header',
    templateUrl: './header.template.html',
    styleUrls: [
        './_header.scss'
    ]

})

export class HeaderComponent {
    links = [
        {
            'href': '#home',
            'label': 'Home'
        },
        {
            'href': '#products',
            'label': 'Products'
        },
        {
            'href': '#locations',
            'label': 'Locations'
        },

        {
            'href': '#contactus',
            'label': 'Contact us'
        },
        {
            'href': '#aboutus',
            'label': 'About us'
        }


    ]
}