import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn } from 'typeorm';

@Entity()
export class Shortener {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    name: 'tiny_url',
    length: 7,
    unique: true
  })
  tinyUrl: string;

  @Column({ name: 'actual_url' })
  actualUrl: string;

  @Column({ name: 'expire_at' })
  expireAt: Date;

  @CreateDateColumn({ name: 'created_at', type: 'timestamp' })
  createdAt: Date;
}