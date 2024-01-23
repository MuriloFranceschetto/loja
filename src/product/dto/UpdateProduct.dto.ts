import { Type } from 'class-transformer';
import {
  ArrayMinSize,
  IsArray,
  IsNotEmpty,
  IsNumber,
  IsOptional,
  IsString,
  IsUUID,
  Min,
  ValidateNested,
} from 'class-validator';
import { CharacteristicProductDTO, ImageProductDTO } from './CreateProduct.dto';

export class UpdateProductDTO {

  @IsUUID(undefined, { message: 'ID de usuário inválido' })
  userId: string;

  @IsString()
  @IsNotEmpty({ message: 'Nome do produto não pode ser vazio' })
  @IsOptional()
  name: string;

  @IsNumber({ maxDecimalPlaces: 2, allowNaN: false, allowInfinity: false })
  @IsOptional()
  @Min(1, { message: 'O valor precisa ser maior que zero' })
  @IsOptional()
  value: number;

  @IsNumber()
  @Min(0, { message: 'Quantidade mínima inválida' })
  @IsOptional()
  availableQuantity: number;

  @IsString()
  @IsOptional()
  description: string;

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(3)
  @Type(() => CharacteristicProductDTO)
  @IsOptional()
  characteristics: CharacteristicProductDTO[];

  @ValidateNested()
  @IsArray()
  @ArrayMinSize(1)
  @Type(() => ImageProductDTO)
  @IsOptional()
  images: ImageProductDTO[];

  @IsString()
  @IsNotEmpty({ message: 'Categoria do produto não pode ser vazia' })
  @IsOptional()
  category: string;
}