# ohos-WebApp
将网页以应用的形式，封装成鸿蒙hap

支持应用接续，将当前页面流转到其他设备

## 使用教程
1. 克隆本仓库，使用DevEco打开
2. 将 `entry/src/main/ets/pages/Index.ets` 第7行的 `https://www.baidu.com/` 更改为你要封装的网址
3. 将 `entry/src/main/resources/base/element/string.json` 第13行的 `WebApp` 更改为你的应用名称
4. 如需更改应用图标，请百度或参考华为开发者文档，~~绝对不是我懒得写了~~
5. 打开左上角 `File - Project Structure (或按下Ctrl+Alt+Shift+S)`，进入Project - Signing Configs，登录你的华为开发者账号，自动创建签名，点OK保存
6. 点击左上角 `Build - Build Hap(s)/APP(s) - Build Hap(s)` 来编译hap安装包，输出目录在 `entry/build/default/outputs/default` 