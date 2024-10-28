// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.rifx.online',
  integrations: [
      starlight({
          title: {
              en: 'Rifx.Online Docs',
              'zh-cn': 'Rifx.Online 文档'
          },
          logo: {
              light: './src/assets/logo.svg',
              dark: './src/assets/dark-logo.svg',
              alt: 'Rifx.Online Docs',
          },
          social: {
              github: 'https://github.com/rifx-online/rifx-docs',
              email: 'support@rifx.online',
          },
          defaultLocale: 'root',
          locales: {
              root: {
                  label: 'English',
                  lang: 'en',
              },
              'zh-cn': {
                  label: '简体中文',
                  lang: 'zh-CN',
              },
          },
          // sidebar: [
          // 	{
          // 		label: 'Guides',
          // 		items: [
          // 			// Each item here is one entry in the navigation menu.
          // 			{ label: 'Quick Start', slug: 'guides/quick-start' },
          // 			{ label: 'Models', slug: 'guides/models' },
          // 			{ label: 'API Keys', slug: 'guides/api-keys' },
          // 		],
          // 	},
          // 	{
          // 		label: 'Reference',
          // 		autogenerate: { directory: 'reference' },
          // 	},
          // ],
      }),
	],

  output: 'server',
  adapter: cloudflare(),
});