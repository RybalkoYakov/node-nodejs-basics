import fs from 'fs/promises';
import path from 'path';
import { fileURLToPath } from 'url';

const copy = async () => {
    async function checkExistingFolders(writeFolderPath, readFolderPath) {
        try {
            await fs.access(readFolderPath, fs.constants.F_OK);
        } catch (e) {
            throw new Error(errorMessage);
        }

        try {
            await fs.mkdir(writeFolderPath);
        } catch (e) {
            throw new Error(errorMessage);
        }
    }

    async function copyFile(file) {
        const filePath = path.join(readableFolderPath, file);
        const fileContent = await fs.readFile(filePath, {encoding});

        const writePath = path.join(writableFolderPath, file);

        await fs.writeFile(writePath, fileContent, {encoding});
    }

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const readableFolderName = 'files';
    const writableFolderName = 'files_copy';

    const readableFolderPath = path.join(__dirname, readableFolderName);
    const writableFolderPath = path.join(__dirname, writableFolderName);

    const errorMessage = 'FS operation failed';
    const encoding = 'utf-8';

    await checkExistingFolders(writableFolderPath, readableFolderPath);

    const files = await fs.readdir(readableFolderPath, {encoding});

    files.forEach(copyFile);
};

await copy();
