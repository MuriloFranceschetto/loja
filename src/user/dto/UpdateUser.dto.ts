import { IsEmail, IsOptional, MinLength } from "class-validator";

export class UpdateUserDto {

    @IsOptional()
    name: string;

    @IsEmail(undefined, { message: 'ERROU O EMAILLL' })
    @IsOptional()
    email: string;

    @MinLength(6, { message: 'Esta senha ta mto pequena' })
    @IsOptional()
    password: string;

}