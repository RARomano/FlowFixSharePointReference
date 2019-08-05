#!/usr/bin/env node

const chalk = require("chalk");
const clear = require("clear");
const figlet = require("figlet");
const path = require("path");
const program = require("commander");

clear();
console.log(
  chalk.red(figlet.textSync("FlowFixer", { horizontalLayout: "full" }))
);

program
  .version("0.0.1")
  .description("Fix SharePoint Refenreces in Flow Actions")
  .parse(process.argv);
