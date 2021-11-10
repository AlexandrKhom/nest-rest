import {Body, Controller, Get, Param, Post, Delete, Put} from '@nestjs/common';
import {CreateProductDto} from "./dto/create-product.dto";
import {UpdateProductDto} from "./dto/update-product.dto";

@Controller('products')
export class ProductsController {
    @Get()
    get() {
        return 'ALEX'
    }

    @Get(':id')
    getById(@Param('id') id: string) {
        return 'one ' + id
    }

    @Post()
    post(@Body() dto: CreateProductDto) {
        return `title: ${dto.title} and ${dto.price}`
    }

    @Delete('id')
    deleteById(@Param('id') id: string) {
        return "del" + id
    }

    @Put('id')
    put(@Body() dto: UpdateProductDto, @Param('id') id: string) {
        return "Update" + id
    }
}
