import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { UniqueEmail } from "../validators/uniqueEmail.validator";

export class CreateUserDto {

    @IsNotEmpty({ message: 'The property name cannot be empty' })
    name: string;

    @IsEmail(undefined, {message: 'ERROU O EMAILLL'})
    @IsNotEmpty()
    @UniqueEmail({ message: 'Este e-mail já está sendo utilizado' })
    email: string;

    @MinLength(6, {message: 'Esta senha ta mto pequena'})
    password: string;

}