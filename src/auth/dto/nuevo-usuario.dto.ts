import { IsEmail, IsString, MaxLength } from "class-validator";
import { IsNotBlank } from "src/decorators/is-not-blank.decorator";

export class NuevoUsuarioDto {

    @IsString()
    @MaxLength(10, {message: 'nombre: longitud máxima de 10'})
    nombre: string;

    @IsNotBlank({message: 'el nombre de usuario no puede estar vacío'})
    @MaxLength(10, {message: 'nombre de usuario: longitud máxima de 10'})
    nombreUsuario: string;

    @IsEmail()
    email: string;

    @IsNotBlank({message: 'la contraseña del usuario no puede estar vacía'})
    password: string;
}