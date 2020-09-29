import { ProductoDto } from './dto/producto.dto';
import { ProductoRepository } from './producto.repository';
import { ProductoEntity } from './producto.entity';
import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { MessageDto } from 'src/common/message.dto';

@Injectable()
export class ProductoService {

    constructor(
        @InjectRepository(ProductoEntity)
        private productoRepository: ProductoRepository
    ) { }

    async getAll(): Promise<ProductoEntity[]> {
        const list = await this.productoRepository.find();
        if (!list.length) {
            throw new NotFoundException(new MessageDto('la lista está vacía'));
        }
        return list;
    }

    async findById(id: number): Promise<ProductoEntity> {
        const producto = await this.productoRepository.findOne(id);
        if (!producto) {
            throw new NotFoundException(new MessageDto('no existe'));
        }
        return producto;
    }

    async findByNombre(nombre: string): Promise<ProductoEntity> {
        const producto = await this.productoRepository.findOne({ nombre: nombre });
        return producto;
    }

    async create(dto: ProductoDto): Promise<any> {
        const exists = await this.findByNombre(dto.nombre);
        if (exists) throw new BadRequestException(new MessageDto('ese nombre ya existe'));
        const producto = this.productoRepository.create(dto);
        await this.productoRepository.save(producto);
        return new MessageDto(`producto ${producto.nombre} creado`);
    }

    async update(id: number, dto: ProductoDto): Promise<any> {
        const producto = await this.findById(id);
        if (!producto)
            throw new NotFoundException(new MessageDto('no existe'));
        const exists = await this.findByNombre(dto.nombre);
        if (exists && exists.id !== id) throw new BadRequestException(new MessageDto('ese producto ya existe'));
        dto.nombre ? producto.nombre = dto.nombre : producto.nombre = producto.nombre;
        dto.precio ? producto.precio = dto.precio : producto.precio = producto.precio;
        await this.productoRepository.save(producto);
        return new MessageDto(`producto ${producto.nombre} actualizado`);
    }

    async delete(id: number): Promise<any> {
        const producto = await this.findById(id);
        await this.productoRepository.delete(producto);
        return new MessageDto(`producto ${producto.nombre} eliminado`);
    }
}
