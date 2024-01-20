import fs from 'fs/promises';
import path from 'path';
import {fileURLToPath} from "url";

const remove = async () => {
    const __fileName = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__fileName);

    const removeFileName = 'fileToRemove.txt';
    const removeFileDirectory = 'files';
    const errorMessage = 'FS operation failed';

    const pathToRemoveFile = path.join(__dirname, removeFileDirectory, removeFileName)

    try {
        await fs.unlink(pathToRemoveFile);
    } catch (e) {
        throw new Error(errorMessage);
    }
};

await remove();