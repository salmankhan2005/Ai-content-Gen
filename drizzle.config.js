/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url:'postgresql://neondb_owner:npg_1gZr9VsNjKoM@ep-misty-truth-a8l3wkma-pooler.eastus2.azure.neon.tech/AI-CONTENT-VAHI?sslmode=require',
    }
  };