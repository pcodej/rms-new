import { connectToDatabase  } from "./database";

export async function executeQuery(sql: string) {
    const {connection}: any = await connectToDatabase();
    try {
        console.log(sql);
        const [row, fields] = await connection.execute(sql);        
        return row;
    } catch (error) {
        console.log("Error in query execution - "+ error)
    } finally {
        connection.end();
    }
}