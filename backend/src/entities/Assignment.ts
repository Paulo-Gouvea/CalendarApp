import { Column, CreateDateColumn, Entity, PrimaryColumn, UpdateDateColumn } from "typeorm";
import { v4 as uuid } from "uuid";

@Entity("assignments")
export class Assignment {
    @PrimaryColumn()
    id: string;

    @Column({ type: "text" })
    title: string;

    @Column({ type: "text" })
    description: string;

    @Column({ type: "timestamp" })
    start: string;

    @Column({ type: "timestamp" })
    end: string;

    @CreateDateColumn()
    created_at: Date; 
    
    @UpdateDateColumn()
    updated_at: Date;

    constructor(){
        if(!this.id) {
            this.id = uuid();
        }
    }
}