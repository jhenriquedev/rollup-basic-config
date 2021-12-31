/// rollup.config.js
import { terser } from 'rollup-plugin-terser';
import replace from '@rollup/plugin-replace';
import { nodeResolve } from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import { getBabelOutputPlugin } from '@rollup/plugin-babel';

//Exemplo
//para builds de desenvolvimento e produção
const devMode = (process.env.NODE_ENV === 'development');
console.log(`${ devMode ? 'development' : 'production' } mode bundle`);

export default [

    // ES6 bundle
    {
  
      input: './src/main.js',

      plugins: [
        replace({
          values: {
            __HELLO__: 'Hi there',
            __GOODBYE__: 'Bye'
          }
        }),
        //nodeResolve(),
      //commonjs(),
      ],

      //Configuração do watch
      watch: {
        include: './src/**',
        clearScreen: false
      },  
  
      output: {
        file: './build/bundle.js',
        format: 'es',
        sourcemap: devMode ? 'inline' : false, //exemplo de build
        plugins: [
            terser({
              ecma: 2020,
              mangle: { toplevel: true },
              compress: {
                module: true,
                toplevel: true,
                unsafe_arrows: true,
                drop_console: !devMode,
                drop_debugger: !devMode
              },
              output: { quote_style: 1 }
            })
          ],
      }
  
    },
    {
        // ES5
        input: './src/main.js',
        plugins: [
          getBabelOutputPlugin({
            presets: ['@babel/preset-env']
          })
        ],
        output: {
          file: './build/bundle-es5.js',
          format: 'cjs'
        }
      },
  
    // IIFE bundle
    {
  
      input: './src/main.js',

      plugins: [
        replace({
          values: {
            __HELLO__: 'Hi there',
            __GOODBYE__: 'Bye'
          }
        }),
        nodeResolve(),
      commonjs(),
      ],

      watch: {
        include: './src/**',
        clearScreen: false
      },  
  
      output: {
        file: './build/bundle-iife.js',
        format: 'iife',
        sourcemap: devMode ? 'inline' : false, //exemplo de build
        plugins: [
            terser({
              ecma: 2020,
              mangle: { toplevel: true },
              compress: {
                module: true,
                toplevel: true,
                unsafe_arrows: true,
                drop_console: !devMode,
                drop_debugger: !devMode
              },
              output: { quote_style: 1 }
            })
          ],
      }
  
    }
  ];