// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
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
				github: 'https://github.com/hypier/rifx-docs'
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
});
