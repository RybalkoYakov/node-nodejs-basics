import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const create = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const fileFolder = 'files';
    const fileName = 'fresh.txt';
    const fileContent = 'I am fresh and young';
    const errorMessage = 'FS operation failed';
    const writePath = path.join(__dirname, fileFolder, fileName);
    const encoding = 'utf-8';

    const writeStream = fs.createWriteStream(writePath, {encoding, flags: 'wx'});

    writeStream.write(fileContent, (error) => {
        if (error) {
            throw new Error(errorMessage);
        }
    })
};

await create();