import mariadb from 'mariadb';
import XLSX from 'xlsx';

async function main() {
    let conn;

    try {
        conn = await mariadb.createConnection({
            host: 'localhost',
            user: 'root',
            password: '[mariaDBPassordetDeres]',
            database: 'gyt_games',
            port: 3306
        });

        console.log('Connected to MariaDB');

        // Create or replace table
        let createTable = `
            CREATE OR REPLACE TABLE swiftle (
                album_name VARCHAR(255),
                track_number INT,
                track_name VARCHAR(255)
            )
        `;
        await conn.query(createTable);
        console.log("Table created.");

        // Read Excel file
        const workbook = XLSX.readFile('taylor_all_album_songs.xlsx');
        const sheet = workbook.Sheets['Ark1'];
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        console.log("Excel rows:", jsonData.length);

        // Insert songs
        for (let row of jsonData) {
            const query = `INSERT INTO swiftle (album_name, track_number, track_name) VALUES (?, ?, ?)`;
            await conn.query(query, [
                row.album_name,
                row.track_number,
                row.track_name
            ]);
            console.log(`Inserted: ${row.album_name}, ${row.track_number}, ${row.track_name}`);
        }

        console.log("Data inserted.");
    } catch (err) {
        console.error(err);
    } finally {
        if (conn) await conn.end();
    }
}

main();