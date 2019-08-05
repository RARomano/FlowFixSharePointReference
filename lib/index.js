#!/usr/bin/env node
"use strict";
var chalk = require("chalk");
var clear = require("clear");
var figlet = require("figlet");
var path = require("path");
var program = require("commander");
clear();
console.log(chalk.red(figlet.textSync("FlowFixer", { horizontalLayout: "full" })));
program
    .version('0.0.1')
    .description("Fix SharePoint Refenreces in Flow Actions")
    .parse(process.argv);
