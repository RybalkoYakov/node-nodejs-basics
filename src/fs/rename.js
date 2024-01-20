import fs from 'fs/promises';
import path from 'path';
import * as url from "url";

const rename = async () => {
    const __fileName = url.fileURLToPath(import.meta.url);
    const __dirName = path.dirname(__fileName);

    const fileDirectory = path.join(__dirName, 'files');

    const wrongFileName = 'wrongFilename.txt';
    const correctFileName = 'properFilename.md';

    const errorMessage = 'FS operation failed';

    try {
        await fs.rename(path.join(fileDirectory, wrongFileName), path.join(fileDirectory, correctFileName));
    } catch (e) {
        throw new Error(errorMessage);
    }

};

await rename();