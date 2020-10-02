import { CreateRolDto } from './dto/create-rol.dto';
import { RolService } from './rol.service';
import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';

@Controller('rol')
export class RolController {

    constructor(private readonly rolService: RolService) {}

    @Get()
    getAll() {
        return this.rolService.getall();
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    create(@Body() dto: CreateRolDto) {
        return this.rolService.create(dto);
    }
}
