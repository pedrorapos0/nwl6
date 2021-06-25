import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from 'typeorm';
import { v4 as uuid } from 'uuid';
import Tag from './Tag';
import User from './User';


@Entity('compliments')
class Compliment {

    @PrimaryColumn()
    readonly id: string;

    @Column()
    user_sender: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_sender'})
    userSender: User;

    @Column()
    user_receiver: string;

    @ManyToOne(() => User)
    @JoinColumn({name: 'user_receiver'})
    userReceiver: User;

    @Column()
    tag_id: string;

    @ManyToOne(() => Tag)
    @JoinColumn({name: 'tag_id'})
    tag: Tag;

    @Column()
    message: string;


    @CreateDateColumn()
    created_at: Date;

    constructor() {
        if(!this.id){
            this.id = uuid();
        }
    }

}

export default Compliment;