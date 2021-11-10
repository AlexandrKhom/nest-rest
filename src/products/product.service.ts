import {Injectable} from "@nestjs/common";
import {CreateProductDto} from "./dto/create-product.dto";
import {InjectModel} from "@nestjs/mongoose";
import {Product, ProductDocument} from "./schemas/product.schema";
import {Model} from "mongoose";
import {UpdateProductDto} from "./dto/update-product.dto";

@Injectable()
export class ProductService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {
    }


    async getAll(): Promise<Product[]> {
        return this.productModel.find().exec()
    }

    async getById(id: string): Promise<Product> {
        return this.productModel.findById(id)
    }
    async create(dto: CreateProductDto): Promise<Product> {
        const newProduct = new this.productModel(dto)
        return newProduct.save()
    }
    async remove(id: string): Promise<Product> {
        return this.productModel.findByIdAndDelete(id)
    }
    async update(id: string, dto: UpdateProductDto): Promise<Product> {
        return this.productModel.findByIdAndUpdate(id, dto, {new: true})
    }
}
