const parseEnv = () => {
    const envVars = process.env;
    const prefix = 'RSS_';

    Object.keys(envVars).forEach(key => {
        console.log(`${prefix}${key}=${envVars[key]}`);
    })
};

parseEnv();