import * as Debug from 'debug';
import { Schema, Model, model } from 'mongoose';
import { IUser } from './User.interface';
const debug = Debug('Setting-Model');

const _schema: Schema = new Schema({
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
});

_schema.pre('save', next => {

})

const _model: Model<IUser> = model<IUser>('users', _schema);

export class User {
    constructor() { }

    create(user: IUser) {
        return new Promise((_resolve) => {

        })
    }

    find() {
        return new Promise((_resolve) => {

        })
    }

    findOne(email: string) {
        return new Promise((_resolve) => {

        })
    }

    update(email: string, user: IUser) {
        return new Promise((_resolve) => {

        })
    }

    delete(email: string) {
        return new Promise((_resolve) => {

        })
    }
}