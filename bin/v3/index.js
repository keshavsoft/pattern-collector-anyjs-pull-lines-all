import packageJson from '../../package.json' with {type: 'json'};

const totalLines = ({ fileContent }) => {
    const fileLines = fileContent.split(/\r?\n/);

    return fileLines;
};

const startFunc = ({ fileContent, showLog = false }) => {

    if (showLog?.keysOnly) console.log(`${packageJson.name}-start`);
    if (showLog?.withValues) console.log(`${packageJson.name}-inputs : `, fileContent);

    const allLines = totalLines({ fileContent });

    if (showLog?.keysOnly) console.log(`${packageJson.name}-end`);
    if (showLog?.withValues) console.log(`${packageJson.name}-outputs : `, allLines);

    return allLines;
};

export default startFunc;