mode.exports = {
    development: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'dev',
            password: 'password',
            database: 'dev'
        },
        pool: {
            min: 0,
            max: 7
        },
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    },

    test: {
        client: 'mysql',
        connection: {
            host: 'localhost',
            user: 'qa',
            password: 'password',
            database: 'qa',
            port: 3307
        },
        pool: {
            min: 0,
            max: 7
        },
        migrations: {
            directory: __dirname + '/db/migrations'
        },
        seeds: {
            directory: __dirname + '/db/seeds'
        }
    }
};
