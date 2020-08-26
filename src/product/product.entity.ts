import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    length: 250
  })
  title: string;

  @Column({
    length: 250
  })
  category: string;

  @Column({
    length: 250
  })
  vendor: string;

  @Column()
  price: number;
}