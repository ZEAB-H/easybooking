// eslint-disable-next-line @typescript-eslint/no-unused-vars
/// <reference path="../../../packages/schema/src/models/knex-tables.ts" />

import knex, { Knex } from "knex";

let _db: Knex | undefined;

export const getDb = () => {
    if (!_db) {
        _db = knex({
            client: "pg",
            connection: {
                host: "localhost",
                port: 5432,
                user: "postgres",
                password: "postgres",
                database: "easybooking",
            },
        });
    }
    return _db;
};

export default getDb;
