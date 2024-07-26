#! /usr/bin/env node
import yargs from 'yargs'
import { hideBin } from 'yargs/helpers'
import init from '../src/commands/initiate.js'
import status from '../src/commands/status.js'
import add from '../src/commands/add.js'
import commit from '../src/commands/commit.js'
import log from '../src/commands/log.js'
import getImage from '../src/commands/getImage.js'
import checkout from '../src/commands/gotoBranch.js'

yargs(hideBin(process.argv))
  .command(init)
  .command(status)
  .command(add)
  .command(commit)
  .command(log)
  .command(getImage)
  .command(checkout)
  .demandCommand()
  .help()
  .argv