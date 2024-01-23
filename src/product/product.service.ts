import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from './entities/product.entity';
import { Repository } from 'typeorm';
import { UpdateProductDTO } from './dto/UpdateProduct.dto';
import { CreatedProductDTO } from './dto/CreateProduct.dto';
import { randomUUID } from 'crypto';

@Injectable()
export class ProductService {
    constructor(
        @InjectRepository(ProductEntity) private readonly productRepository: Repository<ProductEntity>,
    ) {}

    async listProducts() {
        return await this.productRepository.find({ order: {id: 'ASC'}});
    }

    async createProduct(createdProductDTO: CreatedProductDTO) {
        const productEntity = new ProductEntity();

        productEntity.id = randomUUID();
        productEntity.name = createdProductDTO.name;
        productEntity.userId = createdProductDTO.userId;
        productEntity.value = createdProductDTO.value;
        productEntity.availableQuantity = createdProductDTO.availableQuantity;
        productEntity.description = createdProductDTO.description;
        productEntity.category = createdProductDTO.category;
        productEntity.characteristics = createdProductDTO.characteristics;
        productEntity.images = createdProductDTO.images;
        
        return await this.productRepository.save(productEntity);
    }

    async updateProduct(id: string, productEntity: UpdateProductDTO) {
        return await this.productRepository.update(id, productEntity);
    }

    async deleteProduct(id: string) {
        return await this.productRepository.delete(id);
    }
}
