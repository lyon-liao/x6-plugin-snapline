import typescript from '@rollup/plugin-typescript'

const config = [
  {
    input: 'src/snapline/index.ts',
    external: ['@antv/x6'],
    output: [
      {
        file: './lib/index.umd.js',
        name: 'NbSnapline',
        format: 'umd',
        sourcemap: true
      },
      {
        file: './lib/index.esm.js',
        format: 'es',
        sourcemap: true
      }
    ],
    plugins: [
      typescript({
        tsconfig: './tsconfig.json'
      })
    ]
  }
]

export default config
