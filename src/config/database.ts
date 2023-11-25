import mysql from 'mysql2';
import { DB } from './dbConst';
import { executeQuery } from './executeQuery';

export async function connectToDatabase() {
    try {
      // Connection object to execute queries or interact with the database
      const connection = await mysql
        .createConnection({
          host: DB.hostname,
          user: DB.username,
          password: DB.password,
          database: DB.database,
        })
        .promise();
      return { connection, executeQuery };
    } catch (error) {
      console.error("Error connecting to the database:", error);
    }
}