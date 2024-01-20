import path from 'path';
import {fileURLToPath} from 'url';
import { createReadStream } from 'fs';

const read = async () => {
    const __filename = fileURLToPath(import.meta.url);
    const __dirName = path.dirname(__filename);

    const dirToRead = 'files';
    const fileToRead = 'fileToRead.txt';
    const errorMessage = 'FS operation failed';
    const pathToRead = path.join(__dirName, dirToRead, fileToRead);

    try {
        const readableStream = createReadStream(pathToRead, {encoding: 'utf-8'});
        readableStream.pipe(process.stdout);
    } catch (e) {
        throw new Error(errorMessage);
    }
};

await read();