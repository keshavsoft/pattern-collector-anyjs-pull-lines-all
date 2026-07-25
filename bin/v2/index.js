import packageJson from '../../package.json' with {type: 'json'};

const totalLines = ({ fileContent }) => {
    const fileLines = fileContent.split(/\r?\n/);

    return fileLines;
};

const totalLinesStory = (allLines) => {

    const allLinesStory = allLines.map((element, loopIndex) => {
        return {
            line: element,
            lineNumber: loopIndex + 1
        };
    });

    return allLinesStory;
};

const startFunc = ({ fileContent, showLog = false }) => {

    if (showLog?.keysOnly) console.log(`${packageJson.name}-start`);
    if (showLog?.withValues) console.log(`${packageJson.name}-inputs : `, fileContent);

    const allLines = totalLines({ fileContent });

    const allLinesStory = totalLinesStory(allLines);

    if (showLog?.keysOnly) console.log(`${packageJson.name}-end`);
    if (showLog?.withValues) console.log(`${packageJson.name}-outputs : `, allLines, allLinesStory);

    return {
        allLines,
        allLinesStory
    };
};

export default startFunc;