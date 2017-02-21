
import {Component} from '@angular/core';


@Component({
    selector : 'ck-page-loader',
    templateUrl: './pageloader.template.html',
    styleUrls: [
        './pageloader.scss'
    ]
})

export class PageLoader {
    loadingText = 'Baking...';
}