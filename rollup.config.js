import { babel } from '@rollup/plugin-babel';
import { DEFAULT_EXTENSIONS } from '@babel/core';
import typescript from 'rollup-plugin-typescript2';
import postcss from 'rollup-plugin-postcss';
import clear from './rollup-plugins/clear';
// import { terser } from 'rollup-plugin-terser';

const baseConfig = {
  plugins: [
    clear(),
    typescript(),
    babel({
      babelHelpers: 'bundled',
      extensions: [...DEFAULT_EXTENSIONS, '.ts', '.tsx'],
    }),
    postcss({
      modules: true, // css module
      extract: true, // css 抽取出单独的文件
    }),
    // terser(),
  ],
  external: ['react', 'react/jsx-runtime', 'axios'],
};

export default [
  // {
  //   input: 'src/index.ts',
  //   output: [
  //     {
  //       file: 'lib/cjs/index.js',
  //       format: 'cjs',
  //     },
  //   ],
  //   ...baseConfig,
  // },
  {
    input: 'src/index.ts',
    output: [
      {
        file: 'lib/es/index.js',
        format: 'es',
      },
    ],
    ...baseConfig,
  },
];
