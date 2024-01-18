const inquirer = require("inquirer");
const download = require("download-git-repo");
const ora = require("ora");

const downloadAction = async () => {

  const nameToUrl = {
    "commander.js": "https://github.com/tj/commander.js.git",
  };
  // 命令行的执行逻辑代码
  const answers = await inquirer.prompt([{
    type: "list",
    name: "url",
    choices: Object.keys(nameToUrl), // 选项
    message: "请选择需要下载的git-repository", // 问题
  }, {
    type: "input",
    name: "path",
    message: "下载目录",
    default: "./code",
  }]);
  console.log(answers);
  const { url, path } = answers;

  const spinner = ora().start(); // 创建实例并启动加载指示器
  spinner.text = "Downloading..."; // 下载过程中在命令行展示的 loading 信息

  /**
   * 参数一是要下载的仓库对应的远程地址
   * 参数二是下载后保存的目录路径，可以是相对路径或绝对路径。如果目录不存在，则会自动创建。这里使用用户执行
   * 参数三是下载选项，可以不传递，默认为 { clone: true }，表示使用 Git 命令进行克隆。如果设置为 { clone: false }，则表示直接从 Git 仓库中下载。
   * 参数四是一个回调函数，
   */
  download(`direct:${nameToUrl[url]}`, path, { clone: true }, (err) => {
    if (!err) {
      spinner.succeed("下载成功");
    } else {
      spinner.fail("代码下载失败");
    }

  });


};
module.exports = downloadAction;
