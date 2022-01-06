import { terser } from 'rollup-plugin-terser';

import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonJs from '@rollup/plugin-commonjs';

import { getBabelOutputPlugin } from '@rollup/plugin-babel';

const dev = (process.env.NODE_ENV === 'development');
console.log(`${dev ? 'development' : 'production'} mode bundle.`);

export default [
    {
        //ES6
        input: './src/main.js',

        plugins: [
            replace({
                values: {
                    __HELLO__: 'Hi! Hello!',
                    __GOODBYE__: 'Bye',
                },
            }),
            nodeResolve(),
            commonJs(),
        ],

        watch:{
            include: './src/**',
            clearScreen: false,
        },

        output:{
            file: './dist/js/bundle.js',
            format: 'es',
            sourcemap: dev ? 'inline' : false,
            plugins: [
                terser({
                    ecma: 2020,
                    mangle: {toplevel: true},
                    compress: {
                        module: true,
                        toplevel: true,
                        unsafe_arrows: true,
                        drop_console: !dev, 
                        drop_debugger: !dev,
                    },
                    output: { quote_style: 1 }
                }),
            ],
        }
    },

    {
        //ES5
        input: './src/main-es5.js',

        plugins: [
            replace({
                values: {
                    __HELLO__: 'Hi! Hello!',
                    __GOODBYE__: 'Bye',
                },
            }),
            nodeResolve(),
            commonJs(),

            getBabelOutputPlugin({
                presets: ['@babel/preset-env'],
            })
        ],

        watch:{
            include: './src/**',
            clearScreen: false,
        },

        output:{
            file: './dist/js/bundle-es5.js',
            format: 'cjs',
            sourcemap: dev ? 'inline' : false,
            plugins: [
                terser({
                    ecma: 2020,
                    mangle: {toplevel: true},
                    compress: {
                        module: true,
                        toplevel: true,
                        unsafe_arrows: true,
                        drop_console: !dev, 
                        drop_debugger: !dev,
                    },
                    output: { quote_style: 1 }
                }),
            ],
        }
    }
];