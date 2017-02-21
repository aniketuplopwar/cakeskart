import { Component, Input } from '@angular/core';

@Component({
    selector: 'ck-image',
    templateUrl: './image.template.html',
    styleUrls: ['./_image.scss']
})
export class CKImage {
    @Input() imgSrc: string;
    @Input() height: number;
    @Input() width: number;


}