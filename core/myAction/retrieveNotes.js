const fs = require("fs");
const path = require("path");
const { exec } = require("child_process");

const retrieveNotesAction = () => {
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="zh">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>笔记</title>
    </head>
    <body>
        <h1>我的笔记</h1>
        <p>这里是一些文字和链接。</p>
        <a href="https://example.com">示例链接</a>
    </body>
    </html>
  `;

  const filePath = path.join(process.cwd(), "notes.html");

  fs.writeFile(filePath, htmlContent, (err) => {
    if (err) {
      console.error("写入文件失败:", err);
      return;
    }
    console.log("HTML 文件已创建:", filePath);

    // 根据操作系统使用不同的命令打开文件
    const command = process.platform === 'win32' ? 'start' : process.platform === 'darwin' ? 'open' : 'xdg-open';
    exec(`${command} ${filePath}`);
  });
};

module.exports = retrieveNotesAction; 