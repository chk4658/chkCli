#!/usr/bin/env node
const { Command } = require("commander");
const myHelp = require("../core/help");
const myCommander = require("../core/commander");

const program = new Command();

myHelp(program);
myCommander(program);

program.parse(process.argv);