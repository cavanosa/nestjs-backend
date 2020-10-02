import { UsuarioEntity } from './usuario.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(UsuarioEntity)
export class UsuarioRepository extends Repository<UsuarioEntity> {}