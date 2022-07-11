import typescript from '@rollup/plugin-typescript'

export default {
  input: {
    index: 'src/index.ts',
    'test-events': 'src/test-events.ts',
    util: 'src/util.ts'
  },
  output: {
    dir: 'dist',
    format: 'cjs',
    esModule: false,
    preserveModules: true
  },
  // inspired from https://stackoverflow.com/a/59787575
  plugins: [typescript({compilerOptions: {
    lib: ['es2020'],
    target: 'es2019'
  }})],
  treeshake: { moduleSideEffects: false, propertyReadSideEffects: false }
}
