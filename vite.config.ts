import * as path from 'path'
import {defineConfig} from 'vite'
import React from '@vitejs/plugin-react'
import Pages from 'vite-plugin-pages'
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import WindiCSS from 'vite-plugin-windicss'
import TsconfigPaths from 'vite-tsconfig-paths'
import {extendRoute, onRouteGenerate} from './router.config'
import { RouteObject } from "react-router"


export default defineConfig({
	resolve: {
		alias: {
			'~/': `${path.resolve(__dirname, 'src')}/`,
		}
	},

	plugins: [
		React(),

		Pages({
			pagesDir: [
				{
					dir: 'src/pages',
					baseRoute: ''
				},
			],
			extensions: ['tsx', 'ts', 'js'],
			onRoutesGenerated(routes) {
				return onRouteGenerate(routes)
			},
			extendRoute(route: RouteObject) {
				return extendRoute(route)
			}
		}),

		AutoImport({
			resolvers: [
				IconsResolver({
					prefix: 'Icon',
					extension: 'jsx'
				})
			],
			include: [
				/\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
			],
			imports: [
				{
					'axios': [
						['default', 'http']
					],
				}
			],
			dts: 'src/auto-imports.d.ts',
		}),

		Icons({
			compiler: 'jsx',
			autoInstall: true,
		}),

		WindiCSS(),

		TsconfigPaths()
	],

	build: {
		sourcemap: process.env.SOURCE_MAP === 'true',
		rollupOptions: {
			output: {
				manualChunks: (id) => {
					if (id.includes("node_modules")) {
						if (id.includes("tsparticles")) {
							return "vendor_tsparticles"
						}
						if (id.includes("react")) {
							return "vendor_react"
						}

						return "vendor" // all other package goes here
					}
				},
			}
		}
	},

	preview: {
		open: false,
		port: 4000
	},

	server: {
		open: false, // open in browser on server start
		port: 8080,
		hmr: {
			protocol: 'ws',
			port: 8080,
		},
		fs: {
			strict: false,
		},
	},
})
