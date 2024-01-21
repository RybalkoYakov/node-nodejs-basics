

const parseEnv = () => {
    const envVars = process.env;
    const prefix = 'RSS_';

    const parsedObject = {};

    Object.keys(envVars).forEach(key => {
        parsedObject[`${prefix}${key}`] = envVars[key];
    })

    console.log(parsedObject);
};

parseEnv();