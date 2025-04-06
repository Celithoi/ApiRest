
import dotenv from 'dotenv';
dotenv.config();


const databaseConfig = {
  dialect: 'mariadb',
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE,
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,  // Corrigido
    createdAt: 'created_at', // Corrigido
    updatedAt: 'updated_at', // Corrigido
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo'
  },
  timezone: 'America/Sao_Paulo'
};

export default databaseConfig;
