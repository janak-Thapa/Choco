import postgres from 'postgres';
import type { PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import { drizzle } from 'drizzle-orm/postgres-js';

const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
    throw new Error('DATABASE_URL environment variable is not set');
}

const parsedUrl = new URL(databaseUrl);

// Create a postgres connection instance
const sql = postgres({
    host: parsedUrl.hostname,
    port: Number(parsedUrl.port),
    database: parsedUrl.pathname.slice(1),
    user: parsedUrl.username,
    password: parsedUrl.password,
    ssl: {
        rejectUnauthorized: false,
    },
});

// Create a drizzle ORM database instance
const db = drizzle(sql) as PostgresJsDatabase;

export { sql as connection, db };
