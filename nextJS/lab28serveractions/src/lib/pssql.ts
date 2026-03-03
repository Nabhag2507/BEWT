import { Pool } from "pg";

const pool = new Pool({
    connectionString: "postgresql://neondb_owner:npg_UxeDSTKH04Jr@ep-hidden-wildflower-a1mk47ob-pooler.ap-southeast-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require",
    ssl:{
        rejectUnauthorized: false
    }
});

export default pool;