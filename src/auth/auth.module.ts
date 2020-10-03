import { AuthRepository } from './auth.repository';
import { RolEntity } from './../rol/rol.entity';
import { UsuarioEntity } from './../usuario/usuario.entity';
import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([UsuarioEntity, RolEntity, AuthRepository])],
  providers: [AuthService],
  controllers: [AuthController]
})
export class AuthModule {}
