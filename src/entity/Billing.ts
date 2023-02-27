import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Billing {
  @PrimaryGeneratedColumn({ type: 'int', name: 'id' })
  id: number;

  @Column('varchar', { name: 'title', length: 255 })
  title: string;

  @Column('varchar', { name: 'content', length: 255 })
  content: string;
}
