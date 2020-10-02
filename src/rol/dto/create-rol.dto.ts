import { RolNombre } from './../rol.enum';
import { IsEnum } from "class-validator";

export class CreateRolDto {

    @IsEnum(RolNombre, {message: 'el rol sólo puede ser user o admin'})
    rolNombre: string;
}