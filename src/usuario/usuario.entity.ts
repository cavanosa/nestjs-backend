import { RolEntity } from './../rol/rol.entity';
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({name: 'usuario'})
export class UsuarioEntity {

    @PrimaryGeneratedColumn('increment')
    id: number;


    @Column({type: 'varchar', length: 10, nullable: true})
    nombre: string;

    @Column({type: 'varchar', length: 10, nullable: false, unique: true})
    nombreUsuario: string;

    @Column({type: 'varchar', length: 10, nullable: false, unique: true})
    email: string;

    @Column({type: 'varchar', nullable: false})
    password: string;

    @ManyToMany(type => RolEntity, rol => rol.usuarios, {eager: true})
    @JoinTable({
        name: 'usuario_rol',
        joinColumn: {name: 'usuario_id'},
        inverseJoinColumn: {name: 'rol_id'}
    })
    roles: RolEntity[];
}