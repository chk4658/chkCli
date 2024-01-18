# chkCli

### Commander工具

```
const program = require('commander');

program.parse(process.argv); // 表示使用 Commander 来处理命令行参数
```

### inquirer

```
inquirer 9 以上不支持require， 只能import

type：问题的类型，可以是 input、confirm、list、rawlist、expand、checkbox、password 或 editor。
```

### 参考文章

- [Node.js实现自定义命令行工具保姆级教学](https://juejin.cn/post/7233391595306647609)
- [从零搭建一个前端cli脚手架并发布到npm](https://juejin.cn/post/7010673349571379231)
- [Commander.js](https://github.com/tj/commander.js/blob/HEAD/Readme_zh-CN.md)
