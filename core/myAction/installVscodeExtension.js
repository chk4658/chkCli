const { exec } = require("child_process");
const chalk = require('chalk');

const installVscodeExtensionAction = () => {


    const extensions = [
        { identifier: 'formulahendry.auto-close-tag', name: 'Auto Close Tag' },
        { identifier: "ritwickdey.liveserver", name: 'Live Server' },
        { identifier: "k--kato.intellij-idea-keybindings", name: 'IntelliJ IDEA Keybindings' },
        { identifier: "dotjoshjohnson.xml", name: 'XML Tools' },
        { identifier: 'xr0master.webstorm-intellij-darcula-theme', name: 'Webstorm IntelliJ Darcula Theme' },
        { identifier: 'pmsandhu.webstorm-icons', name: 'Webstorm Icon Theme' },
        { identifier: 'shenjiaolong.vue-helper', name: 'vue-helper' },
        { identifier: 'octref.vetur', name: 'Vetur' },
        { identifier: 'esbenp.prettier-vscode', name: 'Prettier - Code formatter' },
        { identifier: 'christian-kohler.path-intellisense', name: 'Path Intellisense' },
        { identifier: 'visualstudioexptteam.intellicode-api-usage-examples', name: 'IntelliCode API Usage Examples' },
        { identifier: 'visualstudioexptteam.vscodeintellicode', name: 'IntelliCode' },
        { identifier: 'ecmel.vscode-html-css', name: 'HTML CSS Support' },
        { identifier: 'vscjava.vscode-java-pack', name: 'Extension Pack for Java' },
        { identifier: 'pucelle.vscode-css-navigation', name: 'CSS Navigation' },
        { identifier: 'naumovs.color-highlight', name: 'Color Highlight' },
        { identifier: 'nextfu.cocos-creator-js', name: 'Cocos Creator JS' },
        { identifier: 'formulahendry.auto-rename-tag', name: 'Auto Rename Tag' },
        { identifier: 'steoates.autoimport', name: 'Auto Import' },

    ]





    const total = extensions.length;
    let completed = 0;
    let succeeded = 0;
    let failed = 0;

    console.log(chalk.cyan(`开始安装 ${total} 个扩展...\n`));

    extensions.forEach(extension => {
        exec(`code --install-extension ${extension.identifier}`, (error, stdout, stderr) => {
            completed++;

            if (error || stderr) {
                failed++;
                console.log(chalk.red(`✗ 失败: ${extension.name}[${extension.identifier}]`));
                console.error(chalk.dim(`  错误: ${error ? error.message : stderr}`));
            } else {
                succeeded++;
                console.log(chalk.green(`✓ 成功: ${extension.name}[${extension.identifier}]`));
            }

            // 显示进度
            const progress = `[${completed}/${total}]`;
            console.log(chalk.yellow(`\n进度: ${progress}`));
            console.log(chalk.gray('------------------------\n'));

            // 安装完成时显示最终结果
            if (completed === total) {
                console.log(chalk.cyan('\n安装完成!'));
                console.log(chalk.green(`✓ 成功安装: ${succeeded} 个`));
                console.log(chalk.red(`✗ 安装失败: ${failed} 个`));
            }
        });
    });
};

module.exports = installVscodeExtensionAction; 