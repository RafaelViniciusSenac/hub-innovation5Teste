// jsonUtils.js
import fs from 'fs';
import path from 'path';

const filePath = path.join(process.cwd(), 'app', 'api', 'db', 'data.json');

export async function readJsonFile() {
    try {
        const jsonData = fs.readFileSync(filePath, 'utf-8');
        return JSON.parse(jsonData);
    } catch (error) {
        console.error("Error reading JSON file:", error);
        return null;
    }
}

export async function writeJsonFile(data) {
    try {
        fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
        console.log("JSON file updated successfully.");
    } catch (error) {
        console.error("Error writing JSON file:", error);
    }
}
