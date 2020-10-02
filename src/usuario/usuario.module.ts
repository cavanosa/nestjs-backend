import { UsuarioEntity } from './usuario.entity';
import { RolEntity } from './../rol/rol.entity';
import { Module } from '@nestjs/common';
import { UsuarioService } from './usuario.service';
import { UsuarioController } from './usuario.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity, RolEntity])],
  providers: [UsuarioService],
  controllers: [UsuarioController]
})
export class UsuarioModule {}
