module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  env: {
    development: {
      plugins: [
        [
          'module-resolver',
          {
            alias: {
              home: './app/modules/home',
              store: './app/store',
              styles: './app/styles'
            }
          }
        ]
      ]
    }
  }
};
