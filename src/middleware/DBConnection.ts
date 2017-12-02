import * as Knex from 'knex';
import * as Config from 'config';

export class DBConnection {

    private static _instance: DBConnection = new DBConnection();

    protected _knex: Knex = null;


    constructor() {
        if (DBConnection._instance) {
            throw new Error('Error: Instantiation failed. Use getInstance instead of new');
        }

        this._knex = Knex(Config.get('db.mysql'));

        DBConnection._instance = this;
    }

    public static getInstance(): DBConnection {
        return DBConnection._instance;
    }

    public getKnex(): Knex {
        return this._knex;
    }
}
