
import {Component, Input} from '@angular/core';

@Component({
    selector: 'ck-panel',
    templateUrl: './panel.template.html' ,
    styleUrls: [
        './_panel.scss'
    ]
})

export class CKPanel {
    @Input() panelTitle: string;
    @Input() theme: string;
}