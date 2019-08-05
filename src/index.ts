#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const program = require("commander");
import * as fs from "fs";

clear();
console.log(
  chalk.red(figlet.textSync("FlowFixer", { horizontalLayout: "full" }))
);

program
  .version("0.0.1")
  .description("Fix SharePoint Refenreces in Flow Actions")
  .option("-l, --list [filename]", "List SharePoint data from file")
  .parse(process.argv);

if (program.list) {
  const data = program.list;

  const fileContent = fs.readFileSync(data);
  const fileContentString = fileContent.toString();

  const matches = [...getData(fileContentString)];

  const sites = new Set(matches.map(item => item[0].replace(/'/g, "")));
  const lists = new Set(matches.map(item => item[1].replace(/'/g, "")));

  const output = {
    sites: [...sites],
    lists: [...lists]
  };

  console.log(chalk.green(JSON.stringify(output)));
}

if (!process.argv.slice(2).length) {
  program.outputHelp();
}

function* getData(input: string) {
  const rattributes = /\/datasets.+?(\'htt.+?').+?\/tables\/.+?('.+?').+?(?=items)/g;
  yield* matchAll(rattributes, input);
}

function* matchAll(regex: any, input: string) {
  while (true) {
    const match = regex.exec(input);
    if (match === null) {
      break;
    }
    const [, ...captures] = match;
    yield captures;
  }
}
