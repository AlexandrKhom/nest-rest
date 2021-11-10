import {Module} from "@nestjs/common";
import {ProductService} from "./product.service";
import {ProductsController} from "./products.controller";
import {MongooseModule} from "@nestjs/mongoose";
import {Product, ProductSchema} from "./schemas/product.schema";

@Module({
    providers: [ProductService],
    controllers: [ProductsController],
    imports: [MongooseModule.forFeature([
        {name: Product.name, schema: ProductSchema}
    ])]
})
export class ProductsModule {

}
