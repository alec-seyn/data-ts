import { prop, Typegoose } from 'typegoose';
import { Serializable } from './core/serializable';

export class User extends Typegoose implements Serializable<User>
{
    @prop()
    name?: string;

    @prop()
    first?: string;

    @prop()
    last?: string;

    serialize()
    {
        const output = 
        {
            name: this.name,
            first: this.first,
            last: this.last
        };
        return output;
    }

    deserialize(input: Object) 
    {
        if ('name' in input) 
            this.name = input['name'];
        if ('first' in input)
            this.first = input['first'];
        if ('last' in input)
            this.last = input['last'];
        return this;
    }

    public toString = () : string => { return `User w Name ${this.first} ${this.last}`; }
}

export const UserModel = new User().getModelForClass(User);