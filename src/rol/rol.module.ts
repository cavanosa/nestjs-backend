import { RolEntity } from './rol.entity';
import { Module } from '@nestjs/common';
import { RolService } from './rol.service';
import { RolController } from './rol.controller';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([RolEntity])],
  providers: [RolService],
  controllers: [RolController]
})
export class RolModule {}
