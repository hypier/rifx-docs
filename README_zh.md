# Rifx.online 文档

[中文版](README_zh.md) | [English Version](README.md)

欢迎来到 Rifx.online 文档库。在这里，您将找到有关如何使用我们的 AI API 平台的详细指南和资源。

## 内容

- [简介](#简介)
- [快速入门](#快速入门)
- [API Key 管理](#api-key-管理)
- [模型选择指南](#模型选择指南)
- [使用示例](#使用示例)
- [常见问题解答](#常见问题解答)
- [支持](#支持)

## 简介

Rifx.online 是一个集合多种 AI 模型的平台，旨在简化开发者和企业对人工智能服务的整合。通过一个统一的 API 接口，您可以访问自然语言处理、图像识别以及其他生成模型。

## 快速入门

1. **注册账户**: 访问 [Rifx.online](https://rifx.online) 创建账户。
2. **获取 API Key**: 登录 [控制台](https://user.rifx.online/zh/dashboard/keys)，生成 API Key。
3. **选择模型**: 浏览并选择适合您需求的模型。
4. **发起请求**: 通过统一 API 调用服务并处理响应。

## API Key 管理

API Key 是访问所有服务的凭证。在您的控制台中生成并安全地管理它们。详情请参阅 [API Key 说明文档](https://docs.rifx.online/zh-cn/guides/api-keys/)。

## 模型选择指南

通过对比模型的功能、性能和适配性，选择最适合您的需求的模型。有关详细信息，请访问 [模型选择指南](https://docs.rifx.online/zh-cn/guides/models/)。

## 使用示例

以下是一些如何通过 API 调用 RIFX 模型的代码示例：

```bash
curl https://api.rifx.online/v1/chat/completions \
  -H "Content-Type: application/json" \
  -H "Authorization: Bearer $RIFX_API_KEY" \
  -d '{
  "model": "gpt-4o-mini",
  "messages": [
    {
      "role": "user",
      "content": "What is the purpose of existence?"
    }
  ]
}'
```

## 常见问题解答

访问 [常见问题解答](https://docs.rifx.online/zh-cn/) 页面以获取关于账户管理、API 使用和故障排除的常见问题解答。

## 支持

如需进一步的帮助或有任何问题，请联系我们的支持团队：
- **电子邮件**: support@rifx.online


感谢您使用 Rifx.online。如果您有任何建议或意见，我们非常乐意收到您的反馈！