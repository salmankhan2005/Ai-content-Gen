import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';
import * as schema from './schema'; // Adjust the path if needed

// Initialize Neon client
const sql = neon(process.env.NEXT_PUBLIC_DRIZZLE_DB_URL!);

// Export Drizzle ORM instance
export const db = drizzle(sql, { schema });
