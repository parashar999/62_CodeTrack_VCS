// import { CommandModule, Argv, ArgumentsCamelCase } from 'yargs'
import chalk from 'chalk'
import { existsSync, writeFileSync, mkdirSync } from "fs";
import { cwd } from 'process';

function handler() {

    const currentDir = cwd();

    console.log(currentDir);
    if (existsSync(`${currentDir}/.codetrack`)) {
        console.log(chalk.blue("codetrack has already been activated !"))
        return;
    }

    try {
        mkdirSync(`.codetrack`);
        mkdirSync(`.codetrack/objects`);
        mkdirSync(`.codetrack/indices`);
        mkdirSync(`.codetrack/hooks`);
        mkdirSync(`.codetrack/info`);
        mkdirSync(`.codetrack/refs`);
        mkdirSync(`.codetrack/history`);
        const obj = {
            "head": "main",
            "detached": false
        }
        writeFileSync(`${currentDir}/.codetrack/refs/branchHead.json`, "{}");
        writeFileSync(`${currentDir}/.codetrack/State.json`, JSON.stringify(obj));
        writeFileSync(`${currentDir}/.codetrack/history/commitLog.json`, "{}")
        writeFileSync(`${currentDir}/.codetrack/config.json`, "");
        writeFileSync(`${currentDir}/.codetrack/index.json`, "{}");
        writeFileSync(`${currentDir}/.ignorewit.json`, "[]")
    } catch (error) {
        console.error(chalk.red('Error in creating codetrack and sub-directories'), error);

    }

}

// function builder(yargs: Argv){
//     return yargs.option('name', {
//         alias: 'n',
//         string: true
//       })
// }

const init = {
    command: 'init',
    describe: 'Init command',
    // builder,
    handler
}

export default init;
// initiate();