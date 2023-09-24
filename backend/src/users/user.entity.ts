import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class user{
    @PrimaryGeneratedColumn()
    id:number;
    
    @ApiProperty()
    @Column()
    username:string;

    @ApiProperty()
    @Column()
    number : number;

    @ApiProperty()
    @Column()
    email:string;

    @ApiProperty()
    @Column()
    name:string;

    @ApiProperty()
    @Column()
    birth:string;

}