import { ProductoService } from './producto.service';
import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards, UsePipes, ValidationPipe} from '@nestjs/common';
import { ProductoDto } from './dto/producto.dto';

@Controller('producto')
export class ProductoController {

    constructor(private readonly productoService: ProductoService) {}

    @Get()
    async getAll() {
        return await this.productoService.getAll();
    }

    @Get(':id')
    async getOne(@Param('id', ParseIntPipe) id: number) {
        return await this.productoService.findById(id);
    }

    @UsePipes(new ValidationPipe({whitelist: true}))
    @Post()
    async create(@Body() dto: ProductoDto) {
        return await this.productoService.create(dto);
    }
    
    @UsePipes(new ValidationPipe({whitelist: true}))
    @Put(':id')
    async update(@Param('id', ParseIntPipe) id: number, @Body() dto: ProductoDto) {
        return await this.productoService.update(id, dto);
    }

    @Delete(':id')
    async delete(@Param('id', ParseIntPipe) id: number){
        return await this.productoService.delete(id)
    }
}
