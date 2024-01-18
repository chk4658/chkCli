#!/usr/bin/env node
const { Command } = require("commander");
const myHelp = require("../core/help");
const downloadAction = require("../core/myAction/download");

const program = new Command();

program.command("download")
  .alias("d")
  .description("下载git项目") // 描述
  .action(downloadAction);

myHelp(program);

program.parse(process.argv);