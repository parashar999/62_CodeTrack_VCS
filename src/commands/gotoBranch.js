import { existsSync, readFileSync, writeFileSync } from "fs";
import { cwd } from 'process';
import { error } from "console";
import chalk from 'chalk'

function handler(args) {
    //check if the current entry is a valid pathname or not
    //then create its entry into the index file
    const branchName = args._[1];
    const currentDir = cwd();
    // console.log(currentDir);
    try {
        const branchHeads = (JSON.parse(readFileSync(`${currentDir}/.codetrack/refs/branchHead.json`, 'utf-8')));
        if(!branchHeads[branchName]){
            throw error("branch name not in exixtence!!");
        }
        
        
        
        // make head point to this commit instead of a branch
        const state = (JSON.parse(readFileSync(`${currentDir}/.codetrack/State.json`, 'utf-8')));
        state["head"] = branchName;
        state["detached"] = false;
        writeFileSync(`${currentDir}/.codetrack/State.json`,JSON.stringify(state));

        //getImage
        const commitId = branchHeads[branchName];
        //check if commitId is valid or not for your current branch
        const indexObj = JSON.parse(readFileSync(`${currentDir}/.codetrack/indices/${commitId}.json`, 'utf-8'));
        for(const filePath in indexObj){
            const hash = indexObj[filePath];
            const data = readFileSync(`${currentDir}/.codetrack/objects/${hash}`);
            writeFileSync(filePath,data);
        }
        writeFileSync(`${currentDir}/.codetrack/index.json`,JSON.stringify(indexObj));

    } catch (error) {
        console.log(chalk.red("error in checking out to mentioned branch "), error);
    }

}
function builder(yargs) {
    return yargs
    .option('branchName', {
        alias: 'br',
        describe: 'branch name of an existing branch where u want to checkout to',
        type: 'string'
    });
}
const checkout = {
    command: 'checkout',
    describe: 'checkout to an existing branch.',
    builder,
    handler
}

export default checkout;