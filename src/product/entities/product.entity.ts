import { Column, CreateDateColumn, DeleteDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ProductCharacteristicEntity } from "./product-characteristic.entity";
import { ProductImageEntity } from "./product-image.entity";

@Entity({ name: 'products' })
export class ProductEntity {
  
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column({ name: 'user_id', length: 100 })
  userId: string;
  
  @Column({ name: 'name', length: 100 })
  name: string;
  
  @Column({ name: 'value' })
  value: number;
  
  @Column({ name: 'available_quantity' })
  availableQuantity: number;
  
  @Column({ name: 'description', length: 255 })
  description: string;
  
  @Column({ name: 'category', length: 100 })
  category: string;
  
  @OneToMany(() => ProductCharacteristicEntity, (characteristic) => characteristic.product, {cascade: true, eager: true})
  characteristics: ProductCharacteristicEntity[];
  
  @OneToMany(() => ProductImageEntity, (image) => image.product, {cascade: true, eager: true})
  images: ProductImageEntity[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: string;
  
  @UpdateDateColumn({ name: 'updated_at' })
  updatedAt: string;
  
  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: string;
}