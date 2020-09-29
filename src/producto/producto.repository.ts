import { ProductoEntity } from './producto.entity';
import { EntityRepository, Repository } from "typeorm";

@EntityRepository(ProductoEntity)
export class ProductoRepository extends Repository<ProductoEntity> {}