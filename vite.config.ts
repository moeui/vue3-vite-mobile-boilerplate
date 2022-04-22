import vue from '@vitejs/plugin-vue'
import path from 'path'
import { defineConfig } from 'vite'
import viteSvgIcons from 'vite-plugin-svg-icons'
import postCssPxToRem from 'postcss-pxtorem'
import styleImport, { VantResolve } from 'vite-plugin-style-import'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        viteSvgIcons({
            // Specify the icon folder to be cached
            iconDirs: [path.resolve(process.cwd(), 'src/assets/icons')],
            // Specify symbolId format
            symbolId: 'icon-[dir]-[name]'
        }),
        styleImport({
            resolves: [VantResolve()]
        })
    ],
    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: 'vue-i18n', replacement: 'vue-i18n/dist/vue-i18n.cjs.js' }
        ]
    },
    css: {
        modules: {
            localsConvention: 'camelCaseOnly'
        },
        preprocessorOptions: {
            // styl: {
            //     imports: [path.resolve(process.cwd(), 'src/assets/stylus/lib/mixin.styl')]
            // },
            less: {
                javascriptEnabled: true,
                modifyVars: {
                    '@primary-color': '#1890ff'
                }
            }
        },
        // 此代码为适配移动端px2rem
        postcss: {
            plugins: [
                postCssPxToRem({
                    rootValue: 37.5, // 1rem的大小
                    propList: ['*'] // 需要转换的属性，这里选择全部都进行转换
                })
            ]
        }
    }
})
