import { Body, Controller, Delete, Get, Param, Post, Put, UseInterceptors } from '@nestjs/common';
import { CreatedProductDTO } from './dto/CreateProduct.dto';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { ProductService } from './product.service';
import { CacheInterceptor } from '@nestjs/cache-manager';

@Controller('products')
export class ProductController {
    
    constructor(
        private readonly productService: ProductService,
    ) {}
    
    @Get()
    @UseInterceptors(CacheInterceptor)
    async getAll() {
        console.log('¯\_(ツ)_/¯')
        return this.productService.listProducts();
    }
    
    @Post()
    async create(@Body() productData: CreatedProductDTO) {
        const createdProduct = this.productService.createProduct(productData);
        return {
            message: 'produto criado com sucesso',
            product: createdProduct,
        };
    }
    
    @Put('/:id')
    async update(@Param('id') id: string, @Body() productData: UpdateProductDTO) {
        const updateResult = await this.productService.updateProduct(id, productData);
        return {
            message: 'produto atualizado com sucesso',
            updateResult,
        };
    }
    
    @Delete('/:id')
    async remove(@Param('id') id: string) {
        const deleteResult = await this.productService.deleteProduct(id);
        return {
            message: 'produto removido com sucesso',
            deleteResult,
        };
    }
    
}