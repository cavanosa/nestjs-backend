import { RolEntity } from './rol.entity';
import { create } from "domain";
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(RolEntity)
export class RolRepository extends Repository<RolEntity> {}