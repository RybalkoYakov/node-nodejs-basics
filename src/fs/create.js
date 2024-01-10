import fs from 'fs';
import path from 'path';

const create = async () => {
    const fileFolder = 'files';
    const fileName = 'fresh.txt';
    const fileContent = 'I am fresh and young';
    const errorMessage = 'FS operation failed';
    const writePath = path.join(fileFolder, fileName);
    const encoding = 'utf-8';

    const writeStream = fs.createWriteStream(writePath, {encoding, flags: 'wx'});

    writeStream.write(fileContent, (error) => {
        if (error) {
            throw new Error(errorMessage);
        }
    })
};

await create();