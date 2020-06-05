module.exports = {
  presets: [
    [
      '@babel/preset-env', 
      {
        // debug: true,
        // modules: false,
        useBuiltIns: 'usage',
        corejs: 3
      },
    ],
    '@babel/preset-react'
  ]
}