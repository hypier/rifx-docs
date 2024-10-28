# Rifx.online Documentation

[中文版](README_zh.md) | [English Version](README.md)

Welcome to the Rifx.online documentation repository. Here, you'll find detailed guides and resources on how to use our AI API platform.

## Contents

- [Introduction](#introduction)
- [Quick Start](#quick-start)
- [API Key Management](#api-key-management)
- [Model Selection Guide](#model-selection-guide)
- [Usage Examples](#usage-examples)
- [FAQ](#faq)
- [Support](#support)

## Introduction

Rifx.online is a platform that integrates multiple AI models, designed to simplify the integration of AI services for developers and businesses. Through a unified API interface, you can access natural language processing, image recognition, and other generative models.

## Quick Start

1. **Register Account**: Visit [Rifx.online](https://rifx.online) to create an account.
2. **Get API Key**: Log in to the [Console](https://user.rifx.online/zh/dashboard/keys) to generate your API Key.
3. **Choose Model**: Browse and select the model that suits your needs.
4. **Make Requests**: Call services through the unified API and handle responses.

## API Key Management

API Keys are your credentials for accessing all services. Generate and manage them securely in your console. For more details, see the [API Key Documentation](https://docs.rifx.online/guides/api-keys/).

## Model Selection Guide

Choose the most suitable model for your needs by comparing model features, performance, and compatibility. For detailed information, visit the [Model Selection Guide](https://docs.rifx.online/guides/models/).

## Usage Examples

Here's an example of how to call RIFX models via API:

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

## FAQ

Visit our [FAQ page](https://docs.rifx.online/) for answers to common questions about account management, API usage, and troubleshooting.

## Support

For further assistance or questions, please contact our support team:
- **Email**: support@rifx.online


Thank you for using Rifx.online. We welcome your feedback and suggestions!
