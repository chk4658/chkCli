const downloadAction = require("./myAction/download.js");
const retrieveNotesAction = require("./myAction/retrieveNotes.js");
const installVscodeExtensionAction = require("./myAction/installVscodeExtension.js");

const myCommander = function (program) {
  program.command("download").alias("d").description("下载git项目").action(downloadAction);
  program.command("retrieveNotes").alias("rn").description("获取笔记").action(retrieveNotesAction);
  program.command("installVscodeExtensions").alias("ive").description("安装VSCode插件").action(installVscodeExtensionAction);
};

module.exports = myCommander;