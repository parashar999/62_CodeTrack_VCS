// Status command
import { existsSync, readFileSync, writeFileSync } from "fs";
import { cwd } from 'process';
import { statusUpdateSync} from "../utils/utilities.js";
import chalk from 'chalk'

export function handler() {
    //check if the current entry is a valid pathname or not
    //then create its entry into the index file
    const currentDir = cwd();
    // console.log(currentDir);

    try {

        const indexObj = JSON.parse(readFileSync(`${currentDir}/.codetrack/index.json`, 'utf-8'));
        const untrackedFiles = [];
        const modifiedFiles = [];
        const deletedFiles = [];

        // console.log(indexObj);
        let ignoreArr = JSON.parse(readFileSync(`${currentDir}/.ignorewit.json`, 'utf-8'));
        ignoreArr = ignoreArr.map((e)=>`${currentDir}/${e}`);

        statusUpdateSync(currentDir, untrackedFiles, modifiedFiles, indexObj,ignoreArr);


        for(const filePath in indexObj){
            if(!existsSync(filePath)){
                deletedFiles.push(filePath);
                delete indexObj.filePath;
            }
        }

        const statusObj = {
            "modified": modifiedFiles,
            "deleted": deletedFiles,
            "untracked": untrackedFiles,
        }
        console.log(statusObj);


    } catch (error) {
        console.log(chalk.red("error in updating index"), error);
    }

}

const status = {
    command: 'status',
    describe: 'status command',
    handler
}

export default status;

// initiate();