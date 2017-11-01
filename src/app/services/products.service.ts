import { Injectable } from "@angular/core";

@Injectable()
export class ProductsService {
    getProductCategories(): Object {

        return [
             {
                label: "Cakes",
                href: "products/Cakes",
                categoryImage: "/images/tiles/cakes/cake-0.png"
            },
            {
                label: "Cup cakes",
                href: "products/CupCakes",
                categoryImage: "/images/tiles/cakes/cupcake-2.jpeg"
            },
            {
                label: "Macroons",
                href: "products/macroon",
                categoryImage: "/images/tiles/macroon/macroon-1.jpg"
            },
            {
                label: "Cake jars",
                href: "products/cakejars",
                categoryImage: "/images/tiles/cakes/cake-jar-1.jpg"
            }
        ]
    }
}