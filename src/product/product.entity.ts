import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

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

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}