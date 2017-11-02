import { Component } from '@angular/core';
import { ProductsService} from "../../services/products.service";

@Component({
    selector: 'ck-products',
    templateUrl: './products.template.html',
    providers: [ProductsService],
    styleUrls: [
        './_products.scss'
    ]
})
export class ProductsComponent {
    categories: Object;

    constructor(private _productService: ProductsService) {

    }

    ngOnInit() {
        this.categories = this._productService.getProductCategories();
    }
}
