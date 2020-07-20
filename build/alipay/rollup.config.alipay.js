import babel from 'rollup-plugin-babel'
import eslint from 'rollup-plugin-eslint'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import replace from 'rollup-plugin-replace'
import { terser } from 'rollup-plugin-terser'
import { uglify } from 'rollup-plugin-uglify'
import path from 'path'

const pathResolve = p => path.join(__dirname, p)

function changePath () {
    return {
        name: 'changePath',
        transform: function transform (code, id) {
            code = code.replace(/\@Storage/g, pathResolve('../../src/ProgramDiff/Ali/storage'))
                .replace(/\@Device/g, pathResolve('../../src/ProgramDiff/Ali/device'))
                .replace(/\@Fetch/g, pathResolve('../../src/ProgramDiff/Ali/fetch'))
                .replace(/\@Router/g, pathResolve('../../src/ProgramDiff/Ali/router'))
                .replace(/\$ANS/g, 'ALP')
                .replace(/\$LIB/g, 'Alipay')
                .replace(/\$LibVERSION/, '4.3.4')
            return {
                code: code,
                id: id
            }
        }
    }
}
export default [{
    input: './src/main_custom.js',
    output: [{
        file: './Demo/util/sdk/AnalysysAgent_Alipay_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './SDK/Alipay/AnalysysAgent_Alipay_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './Demo/util/sdk/AnalysysAgent_Alipay_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './SDK/Alipay/AnalysysAgent_Alipay_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_Alipay_SDK.custom.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_Alipay_SDK.custom.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }],
    plugins: [
        changePath(),
        replace({
            $ans: 'my',
            delimiters: ['', '']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/**'
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        terser({
            'mangle': {
                toplevel: true
            }
        })
    ],
    sourceMap: true

}, {
    input: './src/main.js',
    output: [{
        file: './Demo/util/sdk/AnalysysAgent_Alipay_SDK.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './SDK/Alipay/AnalysysAgent_Alipay_SDK.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './Demo/util/sdk/AnalysysAgent_Alipay_SDK.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './SDK/Alipay/AnalysysAgent_Alipay_SDK.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_Alipay_SDK.es6.min.js',
        format: 'esm',
        name: 'Ans',
        plugins: [
            terser({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }, {
        file: './taroDemo/src/sdk/AnalysysAgent_Alipay_SDK.min.js',
        format: 'cjs',
        name: 'Ans',
        plugins: [
            uglify({
                mangle: {
                    toplevel: true
                }
            })
        ]
    }],
    plugins: [
        changePath(),
        replace({
            $ans: 'my',
            delimiters: ['', '']
        }),
        resolve({
            jsnext: true,
            main: true,
            browser: true
        }),
        commonjs(),
        eslint({
            exclude: [
                'src/**'
            ]
        }),
        babel({
            exclude: 'node_modules/**'
        }),
        terser({
            'mangle': {
                toplevel: true
            }
        })
    ],
    sourceMap: true

}]
