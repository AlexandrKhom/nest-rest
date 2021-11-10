import {Body, Controller, Get, Param, Post, Delete, Put, HttpCode, HttpStatus} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";
import {ProductService} from "./product.service";
import {Product} from "./schemas/product.schema";

@Controller('products')
export class ProductsController {
    constructor(private readonly productsService: ProductService) {
    }
    @Get()
    getAll(): Promise<Product[]> {
        return this.productsService.getAll()
    }

    @Get(':id')
    getById(@Param('id') id: string): Promise<Product> {
        return this.productsService.getById(id)
    }

    @Post()
    @HttpCode(HttpStatus.CREATED)
    create(@Body() dto: CreateProductDto): Promise<Product> {
        return this.productsService.create(dto)
    }

    @Delete('id')
    remove(@Param('id') id: string): Promise<Product> {
        return this.productsService.remove(id)
    }

    @Put('id')
    update(@Body() dto: UpdateProductDto, @Param('id') id: string): Promise<Product> {
        return this.productsService.update(id, dto)
    }
}
