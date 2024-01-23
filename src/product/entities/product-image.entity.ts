import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('product_images')
export class ProductImageEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'url', length: 500 })
    url: string;

    @Column({ name: 'description', length: 255, nullable: true })
    description: string;

    @ManyToOne(() => ProductEntity, (product) => product.images, 
    {orphanedRowAction: "delete", onDelete: "CASCADE", onUpdate: "CASCADE"})
    product: ProductEntity;
    
}