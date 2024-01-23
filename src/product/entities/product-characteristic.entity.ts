import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { ProductEntity } from "./product.entity";

@Entity('product_characteristics')
export class ProductCharacteristicEntity {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ name: 'name', length: 100 })
    name: string;

    @Column({ name: 'description', length: 255, nullable: true })
    description: string;

    @ManyToOne(() => ProductEntity, (product) => product.characteristics, 
    {orphanedRowAction: "delete", onDelete: "CASCADE", onUpdate: "CASCADE"})
    product: ProductEntity;
    
}