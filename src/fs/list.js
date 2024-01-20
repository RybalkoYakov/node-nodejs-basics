import fs from 'fs/promises';
import {fileURLToPath} from 'url';
import path from 'path';

const list = async () => {
    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);

    const scanningDirectory = 'files';
    const errorMessage = 'FS operation failed';
    const consoleColor = '\x1b[34m';

    const pathToScanningDirectory = path.join(__dirname, scanningDirectory);

    const files = await fs.readdir(pathToScanningDirectory);
    if (files.length <= 0) throw new Error(errorMessage);
    files.forEach(file => console.log(consoleColor, file));
};

await list();