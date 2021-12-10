# 搭建说明

请确保电脑上有 chromium 内核的浏览器，例如 chrome 、Edge 或者 chromium 等。

## 使用说明

通过 `npm i` 或者 `yarn` 安装依赖。

如果你的计算机上安装有 chrome，请将 config.ts 路径设为空。如果使用其他浏览器，在 config.ts 中配置浏览器路径。

无需配置

```ts
const browserPath = "";
```

windows 上配置 edge

```ts
const browserPath =
  "C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe ";
```

在 src 下进行开发。

测试文件命名规则 xxx.test.js 或者 xxx.test.ts。 建议使用 ts。

通过 `npm run test` 或者 `yarn test` 执行测试用例。

