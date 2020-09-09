module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          node: '12'
        }
      }
    ],
    '@babel/preset-typescript'
  ],
  plugins: [
    ['module-resolver', {
      alias: {
        '@config': './src/config',
        '@entities': './src/entities',
        '@providers': './src/providers',
        '@repositories': './src/repositories',
        '@cases': './src/useCases'
      }
    }]
  ],
  ignore: [
    '**/*.spec.ts'
  ]
}
